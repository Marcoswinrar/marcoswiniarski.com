
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { client } from "../../../../../sanity/lib/client";
import { Post } from "@/app/utils/interfaces";
import Header from "@/app/components/Header";

interface Params {
  params: {
    slug: string
  }
}

const getPost = async (slug: string) => {
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

  const post = await client.fetch(query);
  return post;
}


const Post = async ({ params }: Params) => {
  const post: Post = await getPost(params?.slug)

  return (
    <article className={articleStyle}>
      <header className="flex flex-col">
        <Link className="mb-5" href={'/'}>
          <span className="text-sm text-purple-500 hover:text-purple-400">
            ← Voltar para a listagem
          </span>
        </Link>
        <span className="text-sm">
          {new Date(post?.publishedAt).toLocaleDateString()}
        </span>
        <Header title={post?.title} />
        <h2>{post?.excerpt}</h2>
      </header>
      <section className={richTextStyle}>
        <PortableText
          value={post?.body}
        />
      </section>
    </article>
  )
}

export default Post;

const articleStyle = `
  mx-auto 
  py-[5rem] 
  px-[2rem] 
  xl:p-[5rem] 
  text-justify
`;

const richTextStyle = `
  mt-14
  prose-headings:my-5
  prose-heading:text-2xl
  prose-p:mb-5
  prose-p:leading-7
  prose-li:list-disc
  prose-li:leading-7
  prose-li:ml-4
`;
