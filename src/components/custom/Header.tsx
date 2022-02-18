import {
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyPoundIcon,
  LogoutIcon,
} from '@heroicons/react/solid'
import {
  MeDocument,
  useGetUserBalancesQuery,
  useLogoutMutation,
} from '../../generated/graphql'

export const Header = () => {
  const [logout] = useLogoutMutation({
    refetchQueries: [{ query: MeDocument }],
  })

  const { data: balances } = useGetUserBalancesQuery()

  return (
    <div className="px-4 py-4">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            Cashout
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CurrencyDollarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              {balances?.getUserBalances.USD}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CurrencyEuroIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              {balances?.getUserBalances.EUR}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CurrencyPoundIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              {balances?.getUserBalances?.GBP}
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => logout()}
            >
              <LogoutIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              Logout
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}
