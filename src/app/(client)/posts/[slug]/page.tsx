
import { Post } from "@/app/utils/interfaces";
import { client } from "../../../../../sanity/lib/client";
import Header from "@/app/components/Header";

interface Params {
  params: {
    slug: string
  }
}

async function getPost(slug: string) {
  const query =
    `*[_type == "post" && slug.current == "${slug}"][0]{
    _id,
    body,
    title,
    excerpt,
    slug,
    publishedAt,
    tags[] -> {
      _id,
      slug,
      name
    }
  }`

  const post = await client.fetch(query)
  return post
}


const page = async ({params}: Params) => {
  const post: Post = await getPost(params?.slug)

  console.log(post)

  return (
    <section>
      <Header title={post?.excerpt} />
    </section>
  )
}

export default page
