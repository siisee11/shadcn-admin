import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { columns } from './components/users-columns'
import { UsersDialogs } from './components/users-dialogs'
import { UsersTable } from './components/users-table'
import UsersProvider from './context/users-context'
import { User, userListSchema } from './data/schema'
import {  getUsers } from './data/users'
import { useEffect, useState } from 'react'

export default function Users() {
  // Parse user list
  const [userList, setUserList] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers()
      setUserList(userListSchema.parse(users))
    }
    fetchUsers()
  }, [])



  return (
    <UsersProvider>
      <Header fixed>
        <div className='ml-auto flex items-center space-x-4'>
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>User List</h2>
            <p className='text-muted-foreground'>
              Manage your users and their roles here.
            </p>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
          <UsersTable data={userList} columns={columns} />
        </div>
      </Main>

      <UsersDialogs />
    </UsersProvider>
  )
}
