import { createFileRoute } from '@tanstack/react-router'
import UsersSecurity from '@/features/users/security'

export const Route = createFileRoute('/_authenticated/users/security')({
  component: UsersSecurity,
}) 