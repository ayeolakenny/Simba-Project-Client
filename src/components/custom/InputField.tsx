import { useField } from 'formik'
import React, { InputHTMLAttributes } from 'react'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label: string
  textarea?: boolean
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props)
  return (
    <div className="relative">
      {label ? (
        <label
          htmlFor={field.name}
          className="text-sm font-medium leading-7 text-gray-600"
        >
          {label}
        </label>
      ) : null}
      {textarea ? (
        <>
          <textarea
            {...field}
            id={field.name}
            name={props.name}
            placeholder={props.placeholder}
            className={`w-full rounded border bg-white ${
              error ? `border-red-600 shadow-lg` : `border-gray-300`
            } py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200`}
          />
        </>
      ) : (
        <>
          <input
            {...props}
            {...field}
            id={field.name}
            placeholder={props.placeholder}
            className={`w-full rounded border bg-white ${
              error ? `border-red-600 shadow-lg` : `border-gray-300`
            } py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200`}
          />
        </>
      )}
      <div className="text-red-600">
        <small>{error ? error : null}</small>
      </div>
    </div>
  )
}
