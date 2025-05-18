import {
  IconHelp,
  IconLayoutDashboard,
  IconSettings,
  IconTool,
  IconUsers,
  IconLock,
  IconAlertTriangle,
} from '@tabler/icons-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'jay',
    email: 'siisee111@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Users',
          icon: IconUsers,
          items: [
            {
              title: 'All Users',
              url: '/users',
              icon: IconUsers,
            },
            {
              title: 'Security',
              url: '/users/security',
              icon: IconLock,
            },
            {
              title: 'Anomaly Detection',
              url: '/users/anomaly-detection',
              icon: IconAlertTriangle,
            },
          ],
        },
        // <agent>Add more pages here</agent>
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Account',
              url: '/settings/account',
              icon: IconTool,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
