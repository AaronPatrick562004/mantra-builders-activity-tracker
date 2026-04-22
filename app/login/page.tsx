import { Suspense } from "react"
import LoginContent from "./login-content"

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-green-700">Loading...</div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  )
}