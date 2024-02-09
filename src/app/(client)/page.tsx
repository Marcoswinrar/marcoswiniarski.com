import { client } from "../../../sanity/lib/client";
import Post from "../components/Post";

async function getPosts() {
  const result = await client.fetch(
    `*[_type == "post"]{
        title,
        slug,
        tags,
        publishedAt,
        excerpt,
        body,
        _id
    }`
  )
  return result
}

export default async function Home() {
  // const posts: Post[] = await getPosts()

  return (
    <section>
      <div>Thats my homepage</div>
    </section>
  );
}
