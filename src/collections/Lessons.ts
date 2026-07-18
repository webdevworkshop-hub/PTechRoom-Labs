import type { CollectionConfig } from 'payload'

export const Lessons: CollectionConfig = {
  slug: 'lessons',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'section', 'duration', 'isPreview', 'order'],
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
      name: 'section',
      type: 'relationship',
      relationTo: 'sections',
      required: true,
      index: true,
      admin: {
        description: 'Parent section (section already links to a course)',
      },
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'attachments',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'duration',
      type: 'number',
      min: 0,
      admin: {
        description: 'Lesson duration in minutes',
      },
    },
    {
      name: 'isPreview',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Allow free preview without enrollment',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Display order within the section (ascending)',
      },
    },
  ],
}
