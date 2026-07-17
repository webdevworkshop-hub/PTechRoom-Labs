import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { Courses } from './collections/Courses'
import { Sections } from './collections/Sections'
import { Lessons } from './collections/Lessons'
import { Blogs } from './collections/Blogs'
import { PDFs } from './collections/PDFs'
import { Orders } from './collections/Orders'
import { Enrollments } from './collections/Enrollments'
import { Reviews } from './collections/Reviews'
import { Coupons } from './collections/Coupons'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Categories,
    Courses,
    Sections,
    Lessons,
    Blogs,
    PDFs,
    Orders,
    Enrollments,
    Reviews,
    Coupons,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
