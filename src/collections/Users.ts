import { isAdmin } from '@/access'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
  },
  auth: true,
  access: {
    create: isAdmin,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'STUDENT',
      options: [
        {
          label: 'Admin',
          value: 'ADMIN',
        },
        {
          label: 'Teacher',
          value: 'TEACHER',
        },
        {
          label: 'Student',
          value: 'STUDENT',
        },
      ],
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'avatar',
      type: 'upload',

      relationTo: 'media',
    },
    {
      name: 'bio',
      type: 'text',
    },
  ],
}
