import { useMeQuery } from '../../generated/graphql'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

interface TransactionTableProps {
  id: number
  from: string
  to: string
  fromEmail: string
  toEmail: string
  value: number
  status: string
  index: number
  senderId: number
  recieverId: number
  sourceCurrency: string
  targetCurrency: string
  createdAt: string
  updatedAt: string
}

export const TransactionTable = ({
  id,
  from,
  to,
  fromEmail,
  toEmail,
  value,
  status,
  index,
  createdAt,
  updatedAt,
  recieverId,
  senderId,
  sourceCurrency,
  targetCurrency,
}: TransactionTableProps) => {
  const { data: loggedInUser } = useMeQuery()
  const loggedInUserId = loggedInUser?.me?.id

  let userTransferValue: any

  if (Number(loggedInUserId) === senderId) {
    userTransferValue = <p className="text-red-500">-{value}</p>
  } else if (Number(loggedInUserId) === recieverId && Number(status) === 0) {
    userTransferValue = <p className="text-yellow-500">-{value}</p>
  } else {
    userTransferValue = <p className="text-green-500">+{value}</p>
  }

  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4">
        <div className="text-sm text-gray-900">{index}</div>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <div className="text-sm text-gray-900">
          {loggedInUser?.me?.name === from ? <p>me</p> : from}
        </div>
        <div className="text-sm text-gray-500">{fromEmail}</div>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
        {loggedInUser?.me?.name === to ? <p>me</p> : to}
        <div className="text-sm text-gray-500">{toEmail}</div>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
        {userTransferValue}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
        {Number(loggedInUserId) === recieverId
          ? targetCurrency
          : sourceCurrency}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
        {dayjs(createdAt).fromNow()}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
        {dayjs(updatedAt).fromNow()}
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        {Number(status) > 0 ? (
          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
            Successful
          </span>
        ) : (
          <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
            Failed
          </span>
        )}
      </td>
    </tr>
  )
}
