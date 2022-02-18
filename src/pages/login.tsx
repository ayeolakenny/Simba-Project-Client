import { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Form, Formik } from 'formik'
import Link from 'next/link'
import * as yup from 'yup'
import { useRouter } from 'next/router'

import { InputField } from '../components/custom/InputField'
import {
  GetUserBalancesDocument,
  GetUserTransactionsDocument,
  MeDocument,
  useLoginMutation,
  useMeQuery,
} from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { RedirectPage } from '../helpers/redirectPage'

const Login = () => {
  const router = useRouter()
  const { data: loggedInUser } = useMeQuery()

  console.log('Overview:', loggedInUser)

  if (loggedInUser?.me) RedirectPage('/overview')

  const [login] = useLoginMutation({
    refetchQueries: [
      { query: MeDocument },
      {
        query: GetUserBalancesDocument,
      },
      {
        query: GetUserTransactionsDocument,
      },
    ],
  })

  const validationSchema = yup.object({
    email: yup.string().required('email is required'),
    password: yup.string().required('password is required'),
  })

  const [loginError, setLoginError] = useState<string>('')

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login to your account
            </h2>
          </div>
          <Formik
            validateOnChange={true}
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              setSubmitting(true)
              try {
                await login({
                  variables: {
                    ...values,
                  },
                })
                router.push('/overview')
              } catch (err: any) {
                const errorObj = err.graphQLErrors[0]
                const errCheck = errorObj.message[0].toString().split(' ')[0]
                if (errCheck !== 'email' || errCheck !== 'password') {
                  setLoginError(errorObj.message[0])
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
                  <div className="space-y-1 rounded-md shadow-sm">
                    <div>
                      <InputField
                        name="email"
                        placeholder="email"
                        label="Email"
                        type="email"
                      />
                    </div>
                    <div>
                      <InputField
                        name="password"
                        placeholder="password"
                        label="Password"
                        type="password"
                      />
                    </div>
                    <div className="flex justify-center">
                      {loginError && (
                        <small className="text-red-500">{loginError}</small>
                      )}
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
                        <span>Sign In</span>
                      )}
                    </button>
                    <small className="cursor-pointer justify-center">
                      Don't have an account?{' '}
                      <Link href="/register">
                        <span className="text-indigo-600">Sign Up</span>
                      </Link>
                    </small>
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

export default Login
