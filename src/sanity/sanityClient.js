import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  // TODO: Replace with your actual project ID from sanity.io
  projectId: 'uv89nln7',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-03-01', // use current date (YYYY-MM-DD) to target the latest API version
});

// Helper function to build image URLs from Sanity
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
