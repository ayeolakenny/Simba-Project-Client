import { TransactionOverview } from '../components/transaction/transaction-overview'
import Link from 'next/link'
import { useGetUserTransactionsQuery, useMeQuery } from '../generated/graphql'
import { RedirectPage } from '../helpers/redirectPage'
import { CheckIcon } from '@heroicons/react/solid'
import { Header } from '../components/custom/Header'

const Overview = () => {
  const { data: loggedInUser } = useMeQuery()
  console.log('Overview:', loggedInUser)

  if (!loggedInUser?.me) RedirectPage('/login')

  const { data: getUserTrasactions } = useGetUserTransactionsQuery()

  const transactions = getUserTrasactions?.getUserTransactions

  return (
    <>
      <Header />
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto flex max-w-7xl justify-between py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
            <Link href="/transaction">
              <span className="sm:ml-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <CheckIcon
                    className="-ml-1 mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  New Transaction
                </button>
              </span>
            </Link>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <TransactionOverview transactions={transactions} />
          </div>
        </main>
      </div>
    </>
  )
}

export default Overview
