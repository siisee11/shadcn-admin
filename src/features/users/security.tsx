import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'

export default function UsersSecurity() {
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
            <h2 className='text-2xl font-bold tracking-tight'>User Security</h2>
            <p className='text-muted-foreground'>
              Manage user security settings and policies here.
            </p>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
          <div className='rounded-lg border p-6'>
            <h3 className='mb-4 text-lg font-medium'>Security Settings</h3>
            <p className='text-muted-foreground'>
              This page will contain security settings for users such as password policies, 
              two-factor authentication settings, session management, and more.
            </p>
          </div>
        </div>
      </Main>
    </>
  )
} 