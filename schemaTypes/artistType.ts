import {defineField, defineType} from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name'
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: {
          previews: [
            {title: '2:1', aspectRatio: 2 / 1},
            {title: '4:5', aspectRatio: 4 / 5},
            {title: '9:16', aspectRatio: 9 / 16},
          ]
        }
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required().max(800),
    }),
    defineField({
      name: 'instagram',
      type: 'string',
    }),
  ]
})