export type FeaturedCourse = {
  id: string
  name: string
  instructor: string
  students: number
  duration: string
  price: number
  image: string
  category: string
}

export const featuredCourses: FeaturedCourse[] = [
  {
    id: 'react-nextjs',
    name: 'React & Next.js Mastery',
    instructor: 'David Kim',
    students: 4120,
    duration: '22h 10m',
    price: 1999,
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    category: 'Development',
  },
]
