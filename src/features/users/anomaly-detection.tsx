import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'

export default function UsersAnomalyDetection() {
  return (
    <>
      <Header fixed>
        <div className='ml-auto flex items-center space-x-4'>
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Anomaly Detection & Alerts</h2>
            <p className='text-muted-foreground'>
              Proactively identify and notify administrators about suspicious activities or unusual patterns.
            </p>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
          <div className='rounded-lg border p-6'>
            <h3 className='mb-4 text-lg font-medium'>Anomaly Detection Settings</h3>
            <p className='text-muted-foreground'>
              Configure thresholds, notification preferences, and monitoring parameters for the anomaly 
              detection system. This page will allow administrators to set up alerts for suspicious 
              login attempts, unusual access patterns, and other security-related anomalies.
            </p>
          </div>
        </div>
      </Main>
    </>
  )
} 