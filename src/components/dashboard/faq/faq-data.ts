export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'what-is-ptechroom',
    question: 'What is PTechRoom Labs?',
    answer:
      'PTechRoom Labs is an online learning platform where students access practical courses and teachers publish structured programs with lessons, resources, and progress tracking.',
  },
  {
    id: 'how-to-enroll',
    question: 'How do I enroll in a course?',
    answer:
      'Browse the featured courses, choose the one you want, and click Enroll now. Sign in or create a student account, then complete checkout to get instant access to your course dashboard.',
  },
  {
    id: 'own-pace',
    question: 'Can I learn at my own pace?',
    answer:
      'Yes. Once enrolled, you can watch lessons, download materials, and complete modules on your schedule. Your progress is saved automatically as you go.',
  },
  {
    id: 'become-teacher',
    question: 'How do I become a teacher on the platform?',
    answer:
      'Click Teach with us and sign in with a teacher account. From your dashboard you can create courses, upload content, set pricing, and manage enrollments through the admin panel.',
  },
  {
    id: 'payment-methods',
    question: 'What payment methods are accepted?',
    answer:
      'We support common online payment options including UPI, debit cards, credit cards, and net banking. All prices are shown in INR before you confirm enrollment.',
  },
]
