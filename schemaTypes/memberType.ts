import {defineField, defineType} from 'sanity'

export const memberType = defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      options: {
        list: [
          {title: 'Président.e', value: 'queen'},
          {title: 'Trésorier.e', value: 'masterofcoins'},
          {title: 'Secrétaire', value: 'masterofpaper'},
          {title: 'Photographe', value: 'masterofproof'},
          {title: 'Member', value: 'member'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name'
      }
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
    })
  ]
})