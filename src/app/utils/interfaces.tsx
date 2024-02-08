export interface Post {
  title: string,
  slug: string,
  publishedAt: { current: string },
  excerpt: string,
  tags: Tag[],
  _id: string,
  body: any
}

export interface Tag {
  name: string,
  slug: string,
  _id: string
}