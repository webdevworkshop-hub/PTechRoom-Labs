export type Teacher = {
  id: string
  name: string
  subject: string
  experience?: string
  image: string
}

export const teachers: Teacher[] = [
  {
    id: 'david-kim',
    name: 'David Kim',
    subject: 'Full-Stack Development',
    image:
      'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/272f51a0-ef47-4eed-91e7-45b0b068190b.png?width=600&height=600',
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    subject: 'Data Science & AI',
    image:
      'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/272f51a0-ef47-4eed-91e7-45b0b068190b.png?width=600&height=600',
  },
  {
    id: 'michael-torres',
    name: 'Michael Torres',
    subject: 'Cloud Architecture',
    image:
      'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/272f51a0-ef47-4eed-91e7-45b0b068190b.png?width=600&height=600',
  },
  {
    id: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    subject: 'UI/UX Design',
    image:
      'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/272f51a0-ef47-4eed-91e7-45b0b068190b.png?width=600&height=600',
  },
  {
    id: 'james-chen',
    name: 'James Chen',
    subject: 'Python & Backend',
    image:
      'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/272f51a0-ef47-4eed-91e7-45b0b068190b.png?width=600&height=600',
  },
]
