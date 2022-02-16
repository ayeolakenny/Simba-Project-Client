import { FieldProps } from 'formik'
import { useState } from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select'
import { useFindAllUsersQuery, useMeQuery } from '../../generated/graphql'

interface CustomSelectProps extends FieldProps {
  options: any[]
  formLabel?: string
  placeholder?: string
  isSearchable?: boolean
  defaultValue?: any
  isAsync: boolean
}

export const CustomSelect = ({
  field,
  form,
  options,
  formLabel,
  placeholder,
  isSearchable,
  defaultValue,
  isAsync,
}: CustomSelectProps) => {
  const [usersOptions, setUsersOptions] = useState<any[]>([])

  const userSelectOptions: { label: string; value: string }[] = []

  const { data: users } = useFindAllUsersQuery()
  const { data: loggedInUser } = useMeQuery()

  users?.findAllUsers?.forEach((user) => {
    if (loggedInUser?.me?.email !== user.email)
      userSelectOptions.push({ value: user.email, label: user.email })
  })

  const onMenuOpen = () => {
    setTimeout(() => {
      setUsersOptions(userSelectOptions)
    }, 1000)
  }

  return (
    <>
      {formLabel ? (
        <label
          htmlFor={field.name}
          className="text-sm font-medium leading-7 text-gray-600"
        >
          {formLabel}
        </label>
      ) : null}

      <div className="App">
        {isAsync ? (
          <AsyncSelect
            name={field.name}
            onChange={(option: any) =>
              form.setFieldValue(field.name, option.value)
            }
            onBlur={field.onBlur}
            placeholder={placeholder}
            onMenuOpen={onMenuOpen}
            options={usersOptions}
            isSearchable={isSearchable}
          />
        ) : (
          <Select
            name={field.name}
            defaultValue={defaultValue}
            value={options.find((option) => option.value === field.value)}
            onChange={(option: any) =>
              form.setFieldValue(field.name, option.value)
            }
            onBlur={field.onBlur}
            options={options}
            placeholder={placeholder}
            isSearchable={isSearchable}
          />
        )}
      </div>
    </>
  )
}
