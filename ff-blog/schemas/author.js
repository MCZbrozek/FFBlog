export default {
    name: 'author',
    type: 'document',
    title: 'author',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'bio',
            type: 'richText'
        },
        {
            name: 'image',
            type: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}