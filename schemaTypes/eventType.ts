import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
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
      name: 'date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        displayTimeZone: 'Europe/Paris'
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
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required().max(800),
    }),
    defineField({
      name: 'locationName',
      title: "Nom de l'établissement"
      ,type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: "Renseigne le lieu sur google map",
      type: 'geopoint',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'helloasso',
      title: "Link to Hello Asso",
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ]
})