import { LockClosedIcon } from '@heroicons/react/solid'
import { Form, Formik } from 'formik'
import Link from 'next/link'
import * as yup from 'yup'
import { useRouter } from 'next/router'

import { InputField } from '../components/custom/InputField'
import { useSignupMutation } from '../generated/graphql'

const Login = () => {
  const router = useRouter()

  const [signup] = useSignupMutation()

  const validationSchema = yup.object({
    name: yup.string().required('name is required'),
    email: yup.string().required('email is required'),
    password: yup.string().required('password is required'),
  })

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
              Sign up for an account
            </h2>
          </div>
          <Formik
            validateOnChange={true}
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true)
              const response = await signup({
                variables: {
                  ...values,
                },
              })
              if (response?.data?.signup) {
                router.push('/transactions')
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
                        name="name"
                        placeholder="name"
                        label="Name"
                        type="text"
                      />
                    </div>
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
                        <span>Sign up</span>
                      )}
                    </button>
                    <small className="cursor-pointer justify-center">
                      Already have an account?{' '}
                      <Link href="#">
                        <span className="text-indigo-600">Sign In</span>
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
