
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { client } from "../../../../../sanity/lib/client";
import { Post } from "@/app/utils/interfaces";
import Header from "@/app/components/Header";
import { urlForImage } from "../../../../../sanity/lib/image";
import { dateConverterToPtBr } from "@/app/utils/dateConverter";

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

export const metadata: Metadata = {}

const Post = async ({ params }: Params) => {
  const post: Post = await getPost(params?.slug)

  metadata.title = `${post?.title} | ${post?.excerpt} `

  return (
    <article className={articleStyle}>
      <header className="flex flex-col">
        <Link className="mb-5" href={'/'}>
          <span className="text-sm text-purple-500 hover:text-purple-400">
            ← Voltar para a listagem
          </span>
        </Link>
        <span className="text-sm">
          {dateConverterToPtBr(post?.publishedAt)}
        </span>
        <Header title={post?.title} />
        <h2>{post?.excerpt}</h2>
      </header>
      <section className={richTextStyle}>
        <PortableText
          components={portableTextComponent}
          value={post?.body}
        />
      </section>
    </article>
  )
}

export default Post;

const portableTextComponent = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value)}
        alt={value?.alt}
        width={700}
        height={700}
        style={{ margin: '0 auto' }}
      />
    ),
  },
};

const articleStyle = `
  mx-auto 
  py-[2rem] 
  px-[2rem] 
  xl:p-[5rem] 
  xl:text-justify
`;

const richTextStyle = `
  mt-12
  prose-headings:my-5
  prose-headings:text-purple-500
  prose-headings:text-1xl
  prose-heading:text-2xl
  prose-p:mb-5
  prose-p:leading-7
  prose-li:list-disc
  prose-li:leading-7
  prose-li:ml-4
`;
