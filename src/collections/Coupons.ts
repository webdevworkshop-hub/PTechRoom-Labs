import type { CollectionConfig } from 'payload'

export const Coupons: CollectionConfig = {
  slug: 'coupons',
  admin: {
    useAsTitle: 'code',
    defaultColumns: ['code', 'type', 'discount', 'usedCount', 'maxUses', 'active', 'expiresAt'],
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Coupon code students enter at checkout',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'percentage',
      options: [
        {
          label: 'Percentage',
          value: 'percentage',
        },
        {
          label: 'Fixed Amount',
          value: 'fixed',
        },
      ],
    },
    {
      name: 'discount',
      type: 'number',
      required: true,
      min: 0,
      validate: (
        value: number | null | undefined,
        { siblingData }: { siblingData: { type?: string } },
      ) => {
        if (value == null) return 'Discount is required'
        if (value < 0) return 'Discount cannot be negative'
        if (siblingData?.type === 'percentage' && value > 100) {
          return 'Percentage discount cannot exceed 100'
        }
        return true
      },
      admin: {
        description: 'Percentage (0–100) or fixed currency amount',
      },
    },
    {
      name: 'maxUses',
      type: 'number',
      min: 1,
      admin: {
        description: 'Leave empty for unlimited uses',
      },
    },
    {
      name: 'usedCount',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
      admin: {
        readOnly: true,
        description: 'Incremented by checkout logic — do not edit manually',
      },
    },
    {
      name: 'expiresAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      index: true,
    },
  ],
}
