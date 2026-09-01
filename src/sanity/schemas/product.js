export const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      description: 'Used to calculate discount percentage',
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'ageGroup',
      title: 'Age Group',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'includes',
      title: 'Includes',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'stockStatus',
      title: 'Stock Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'In Stock' },
          { title: 'Out of Stock', value: 'Out of Stock' },
          { title: 'Low Stock', value: 'Low Stock' }
        ]
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }
  ]
};
