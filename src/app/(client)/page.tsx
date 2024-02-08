import Header from "../components/Header";
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
  const posts: Post[] = await getPosts()
  console.log(posts)

  return (
    <>
      <Header title="Articles" />
      {posts?.length > 0 && posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
}
