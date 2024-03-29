import { client } from "../../../sanity/lib/client";
import Post from "../components/Post";

 const getPosts = async () => {
  const result = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
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
  )
  return result;
}


export const dynamic = 'force-dynamic';

const Home = async () => {
  const posts: Post[] = await getPosts()

  return (
    <section>
      {posts?.length > 0 && posts.map((post) => (
        <Post key={post?._id} post={post} />
      ))}
    </section>
  );
}

export default Home
