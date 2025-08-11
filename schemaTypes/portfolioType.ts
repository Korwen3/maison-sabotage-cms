import {defineField, defineType} from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: "document",
  fields: [
    defineField({
      name:"name",
      type:'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: 'array',
      of: [
        {
          type: "image",
          options: {
            hotspot: true
          },
          fields: [
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
              validation: (rule) => rule.required()
            }),
            defineField({
              name: 'alt',
              title: "Alt value for images (will be caption if empty)",
              type: 'string',
            })
          ]
        }
      ]
    })
  ]
})