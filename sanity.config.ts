import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {googleMapsInput} from '@sanity/google-maps-input'

const customStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Main Page Config')
        .child(
          S.document()
            .id('config')
            .schemaType('config')
            .documentId('config')),
          ...S.documentTypeListItems().filter(listItem => !['config'].includes(listItem.getId()))
    ])

export default defineConfig({
  name: 'default',
  title: 'maison-sabotage-cms',

  projectId: '30nf5ka7',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: customStructure
    }),
    visionTool(),
    googleMapsInput({
      apiKey: "AIzaSyDLuQylBO8x-vqz6fsXLjhGjDAmaoMnhJA",
      defaultZoom: 20,
      defaultLocation: {lat: 50.62429940217767, lng: 3.0650657152824143}
    })
  ],
  schema: {
    types: schemaTypes,
  },
})

