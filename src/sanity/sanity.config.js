import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Kiddex Admin Studio',

  // TODO: Replace with your actual project ID and dataset from sanity.io
  projectId: 'uv89nln7',
  dataset: 'production',

  basePath: '/kiddexadmin',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
