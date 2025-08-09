import {defineField, defineType} from 'sanity'

export const configType = defineType({
  name: 'config',
  title: 'Main Page Config',
  type: 'document',
  fields: [
    defineField({
      name: 'browsertitle',
      title: "Browser title",
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image de fond de la section Hero',
      type: 'image',
    }),
    defineField({
      name: 'logo',
      type: 'image',
    })
  ]
})