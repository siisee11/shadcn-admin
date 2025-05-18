import { createFileRoute } from '@tanstack/react-router'
import UsersAnomalyDetection from '@/features/users/anomaly-detection'

export const Route = createFileRoute('/_authenticated/users/anomaly-detection')({
  component: UsersAnomalyDetection,
}) 