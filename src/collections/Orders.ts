import { isAdmin, isLoggedIn } from '@/access'
import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'paymentId',
    defaultColumns: ['student', 'totalAmount', 'paymentStatus', 'orderStatus', 'purchasedAt'],
  },
  access: {
    create: isLoggedIn,
    read: ({ req: { user } }) => {
      if (!user) return false

      if (user.role === 'ADMIN') return true

      return {
        student: {
          equals: user.id,
        },
      }
    },
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'student',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      index: true,
      filterOptions: {
        role: {
          equals: 'STUDENT',
        },
      },
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Item',
        plural: 'Items',
      },
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: ['courses', 'pdfs'],
          required: true,
          admin: {
            description: 'Course or PDF purchased in this order',
          },
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          min: 0,
          admin: {
            description: 'Unit price at time of purchase (snapshot)',
          },
        },
      ],
    },
    {
      name: 'totalAmount',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'paymentMethod',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Razorpay',
          value: 'razorpay',
        },
        {
          label: 'Stripe',
          value: 'stripe',
        },
      ],
    },
    {
      name: 'paymentId',
      type: 'text',
      index: true,
      admin: {
        description: 'Gateway payment / transaction ID',
      },
    },
    {
      name: 'paymentStatus',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Paid',
          value: 'paid',
        },
        {
          label: 'Failed',
          value: 'failed',
        },
        {
          label: 'Refunded',
          value: 'refunded',
        },
      ],
      index: true,
    },
    {
      name: 'orderStatus',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Completed',
          value: 'completed',
        },
        {
          label: 'Cancelled',
          value: 'cancelled',
        },
        {
          label: 'Refunded',
          value: 'refunded',
        },
      ],
      index: true,
    },
    {
      name: 'purchasedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
}
