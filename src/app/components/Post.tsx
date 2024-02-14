import Link from "next/link"
import { Post } from "../utils/interfaces"
import { Nunito } from "next/font/google"

interface Props {
  post: Post
}

const font_light = Nunito({ weight: "300", subsets: ["latin"] })

const Post = ({ post }: Props) => {
  return (
    <Link href={`/posts/${post?.slug?.current}`}>
      <article className={articleStyle}>
        <div className="hover:text-pink-500">
          <time className="text-xs">
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
          <h1 className="xl:text-lg mb-2">
            {post.title}
          </h1>
          <h2 className={` ${font_light.className} xl:text-base mb-2`}>
            {post.excerpt}
          </h2>
        </div>
        <div className="flex">
          {post.tags?.map((tag) => (
            <span className="rounded-none bg-pink-700 mx-2 text-xs p-[.3rem]" key={tag?._id}>
              {tag.name}
            </span>
          ))}
        </div>
      </article>
    </Link>
  )
}

export default Post

const articleStyle = `
  text-sm 
  w-full 
  p-3 
  xl:p-5 
  border-b 
  border-slate-500
`
