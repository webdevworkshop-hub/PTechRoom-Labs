import type { CollectionConfig } from "payload";

export const Enrollments: CollectionConfig = {
  slug: "enrollments",
  admin: {
    useAsTitle: "id",
    defaultColumns: [
      "student",
      "course",
      "progress",
      "completed",
      "lastLesson",
      "updatedAt",
    ],
  },
  fields: [
    {
      name: "student",
      type: "relationship",
      relationTo: "users",
      required: true,
      index: true,
      filterOptions: {
        role: {
          equals: "STUDENT",
        },
      },
    },
    {
      name: "course",
      type: "relationship",
      relationTo: "courses",
      required: true,
      index: true,
    },
    {
      name: "order",
      type: "relationship",
      relationTo: "orders",
      admin: {
        description: "Source order (optional for free / manual enrollments)",
      },
    },
    {
      name: "progress",
      type: "number",
      required: true,
      defaultValue: 0,
      min: 0,
      max: 100,
      admin: {
        description: "Completion percentage (0–100)",
      },
    },
    {
      name: "completed",
      type: "checkbox",
      defaultValue: false,
      index: true,
    },
    {
      name: "completedAt",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        condition: (_data, siblingData) => Boolean(siblingData?.completed),
      },
    },
    {
      name: "lastLesson",
      type: "relationship",
      relationTo: "lessons",
      admin: {
        description: "Last lesson the student accessed (resume playback)",
      },
    },
  ],
};
