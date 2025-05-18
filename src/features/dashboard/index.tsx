import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'

export default function Dashboard() {
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <div className='ml-auto flex items-center space-x-4'>
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Main ===== */}
      <Main className='space-y-4 p-4'>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 space-y-4'>
          {/* <agent>Add more dashboard cards here. See example below.</agent> */}
          {/* <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Subscriptions
              </CardTitle>
              <IconUser size={14}/>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>+2350</div>
              <p className='text-muted-foreground text-xs'>
                +180.1% from last month
              </p>
            </CardContent>
          </Card> */}
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
          {/* Other Cards */}
        </div>
      </Main>
    </>
  )
}
