import type { Access } from 'payload'

export const isAdmin: Access = ({ req: { user } }) => {
  return user?.role === 'ADMIN'
}

export const isTeacher: Access = ({ req: { user } }) => {
  return user?.role === 'TEACHER'
}

export const isLoggedIn: Access = ({ req: { user } }) => {
  return Boolean(user)
}

export const isAdminOrTeacher: Access = ({ req: { user } }) => {
  return user?.role === 'ADMIN' || user?.role === 'TEACHER'
}

export const canEditOwnCourse: Access = ({ req: { user } }) => {
  if (!user) return false

  if (user.role === 'ADMIN') {
    return true
  }

  if (user.role === 'TEACHER') {
    return {
      teacher: {
        equals: user.id,
      },
    }
  }

  return false
}

export const canEditOwnBlog: Access = ({ req: { user } }) => {
  if (!user) return false

  if (user.role === 'ADMIN') {
    return true
  }

  if (user.role === 'TEACHER') {
    return {
      author: {
        equals: user.id,
      },
    }
  }

  return false
}

export const canReadPublished: Access = ({ req: { user } }) => {
  if (user?.role === 'ADMIN') {
    return true
  }

  return {
    status: {
      equals: 'published',
    },
  }
}

export const canReadOwnEnrollments: Access = ({ req: { user } }) => {
  if (!user) return false

  if (user.role === 'ADMIN') {
    return true
  }

  return {
    student: {
      equals: user.id,
    },
  }
}
