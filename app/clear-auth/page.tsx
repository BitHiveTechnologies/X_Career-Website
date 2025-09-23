"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ClearAuthPage() {
  const router = useRouter()

  useEffect(() => {
    // Clear localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('careerx_user')
      localStorage.removeItem('careerx_token')
      localStorage.removeItem('careerx_redirect_after_auth')
      console.log('Cleared all auth data from localStorage')
    }
    
    // Redirect to login after clearing
    setTimeout(() => {
      router.push('/login')
    }, 1000)
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Auth Data Cleared</h1>
        <p className="text-gray-600 mb-4">Redirecting to login page...</p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
      </div>
    </div>
  )
}
