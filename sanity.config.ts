import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {documentInternationalization} from '@sanity/document-internationalization'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'Lynksun CMS',

  projectId: 'hbqobpam',
  dataset: 'production',

  plugins: [
    deskTool(),
    ...(isDev
      ? [
          visionTool({
            defaultApiVersion: 'v1',
            defaultDataset: 'production',
          }),
        ]
      : []),
    ...(isDev ? devOnlyPlugins : []),
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'th', title: 'Thai'},
      ],
      schemaTypes: ['posts'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
