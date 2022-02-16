import { useMeQuery } from '../generated/graphql'
import { RedirectPage } from '../helpers/redirectPage'

export default function Home() {
  const { data: loggedInUser } = useMeQuery()

  if (loggedInUser?.me) RedirectPage('/overview')
  else RedirectPage('/login')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      You would be redirected shortly
    </div>
  )
}
