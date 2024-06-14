import { defineType, defineField, defineArrayMember } from 'sanity'

export const onboarding = defineType({
  type: "document",
  name: "onboarding",
  title: "Onboarding flows",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      type: "array",
      name: "steps",
      of: [
        defineArrayMember({
          type: "onboardingStep",
        }),
      ],
    }),
  ],
});

