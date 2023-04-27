import useAuth from 'hooks/useAuth'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const CUSSORedirectPage: NextPage = () => {
  const router = useRouter()
  const { login } = useAuth()
  const ticket = router.query.ticket

  useEffect(() => {
    if (ticket) {
      login(ticket as string)
    }
  }, [ticket])

  return <div tw="h-screen flex">Redirecting...</div>
}

export default CUSSORedirectPage
