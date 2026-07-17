import type { CollectionConfig } from "payload";

export const Reviews: CollectionConfig = {
  slug: "reviews",
  admin: {
    useAsTitle: "id",
    defaultColumns: ["student", "course", "rating", "approved", "createdAt"],
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
      name: "rating",
      type: "number",
      required: true,
      min: 1,
      max: 5,
      validate: (value: number | null | undefined) => {
        if (value == null) return "Rating is required";
        if (!Number.isInteger(value)) return "Rating must be a whole number";
        if (value < 1 || value > 5) return "Rating must be between 1 and 5";
        return true;
      },
    },
    {
      name: "review",
      type: "textarea",
      required: true,
      maxLength: 2000,
    },
    {
      name: "approved",
      type: "checkbox",
      defaultValue: false,
      index: true,
      admin: {
        description: "Only approved reviews should be shown publicly",
      },
    },
  ],
};
