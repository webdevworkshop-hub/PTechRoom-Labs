import type { CollectionConfig } from 'payload'

export const PDFs: CollectionConfig = {
  slug: 'pdfs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'teacher', 'price', 'status'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'pdfFile',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'The downloadable PDF file',
      },
    },
    {
      name: 'teacher',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      index: true,
      filterOptions: {
        role: {
          equals: 'TEACHER',
        },
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      index: true,
    },
  ],
}
