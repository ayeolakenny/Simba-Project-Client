import { LockClosedIcon } from '@heroicons/react/solid'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { useRouter } from 'next/router'

import { CustomSelect } from '../components/custom/CustomSelect'
import { InputField } from '../components/custom/InputField'
import { currencies } from '../constants'
import {
  GetUserBalancesDocument,
  GetUserTransactionsDocument,
  useFindAllUsersQuery,
  useMeQuery,
  useSendMoneyMutation,
} from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { calculateExchangeRate } from '../helpers/calculateExchangeRate'
import { RedirectPage } from '../helpers/redirectPage'
import { Header } from '../components/custom/Header'

const validationSchema = yup.object({
  amount: yup
    .number()
    .typeError('amount must be a number')
    .positive('amount must be greater than zero')
    .required('amount is required'),
  reciever: yup.string().required('reciever email is required'),
})

const Transaction = () => {
  const router = useRouter()
  const { data: loggedInUser } = useMeQuery()
  const { data: allUsers } = useFindAllUsersQuery()

  if (!loggedInUser?.me) RedirectPage('/login')

  const [sendMoney] = useSendMoneyMutation({
    refetchQueries: [
      {
        query: GetUserBalancesDocument,
        variables: {
          userId: loggedInUser?.me?.id,
        },
      },
      {
        query: GetUserTransactionsDocument,
        variables: {
          userId: loggedInUser?.me?.id,
        },
      },
    ],
  })
  const loggedInUserId: any = loggedInUser?.me?.id
  const [transactionError, setTransactionError] = useState<string>('')

  return (
    <>
      <Header />
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Send Money
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Transfer money to your family, friends and loved ones...
            </p>
          </div>
          <Formik
            validateOnChange={true}
            initialValues={{
              amount: '',
              sourceCurrency: '',
              targetCurrency: '',
              reciever: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              setSubmitting(true)
              try {
                const exchangeRate = await calculateExchangeRate(
                  values.sourceCurrency,
                  values.targetCurrency,
                  Number(values.amount)
                )
                console.log(exchangeRate)
                await sendMoney({
                  variables: {
                    amount: parseInt(values.amount),
                    exchangeRate: parseInt(exchangeRate),
                    recieverEmail: values.reciever,
                    senderId: parseInt(loggedInUserId),
                    sourceCurrency:
                      values.sourceCurrency === ''
                        ? 'USD'
                        : values.sourceCurrency.toUpperCase(),
                    targetCurrency:
                      values.targetCurrency === ''
                        ? 'USD'
                        : values.targetCurrency.toUpperCase(),
                  },
                })
                router.push('/overview')
              } catch (err: any) {
                const errorObj = err.graphQLErrors[0]
                if (errorObj.message[0] === 'insufficient fund') {
                  setTransactionError(errorObj.message[0])
                } else {
                  setErrors(toErrorMap(err.graphQLErrors[0].message))
                }
              }
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mt-8 space-y-6">
                  <div className="space-y-2 rounded-md shadow-sm">
                    <div>
                      <div>
                        <InputField
                          name="amount"
                          placeholder="amount to send"
                          label="Amount"
                          type="text"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <Field
                          className="custom-select"
                          name="sourceCurrency"
                          component={CustomSelect}
                          placeholder="Choose currency"
                          formLabel="Source Currency"
                          options={currencies}
                          isSearchable={false}
                          isAsync={false}
                        />
                        <Field
                          className="custom-select"
                          name="targetCurrency"
                          component={CustomSelect}
                          placeholder="Choose currency"
                          formLabel="Target Currency"
                          options={currencies}
                          isSearchable={false}
                          isAsync={false}
                        />
                        <Field
                          className="custom-select"
                          name="reciever"
                          component={CustomSelect}
                          placeholder="reciever's email address"
                          formLabel="Reciever"
                          options={
                            allUsers?.findAllUsers
                              ? allUsers?.findAllUsers
                              : { label: 'loading', value: 'loading' }
                          }
                          isSearchable={false}
                          isAsync={true}
                        />
                      </div>
                      <div className="flex justify-center">
                        {transactionError && (
                          <small className="text-red-500">
                            {transactionError}
                          </small>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon
                          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          aria-hidden="true"
                        />
                      </span>
                      {isSubmitting ? (
                        <span className="loader mr-3"></span>
                      ) : (
                        <span>Send</span>
                      )}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Transaction
