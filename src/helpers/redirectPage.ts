import { useRouter } from 'next/router'

export const RedirectPage = (newUrl: string) => {
  const router = useRouter()
  typeof window !== 'undefined' ? router.push(newUrl) : null
}
