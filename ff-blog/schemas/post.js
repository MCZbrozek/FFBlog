export default {
    name: 'post',
    type: 'document',
    title: 'post',
    
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'author',
        type: 'reference',
        to: [
            {
            type: 'author',
            }
        ],
      },
      {
        name: 'body',
        type: 'richText',
        title: 'Body text',
      }
    ]
  }