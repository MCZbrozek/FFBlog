import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'

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
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
            source: 'title',
            maxLength: 96
        }
      },
      {
        name: 'author',
        title: 'Author',
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