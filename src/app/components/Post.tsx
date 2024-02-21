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
      <section className={sectionStyle}>
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
            <span className="mx-2 p-[.3rem] text-purple-500" key={tag?._id}>
              #{tag.name}
            </span>
          ))}
        </div>
      </section>
    </Link>
  )
}

export default Post;

const sectionStyle = `
  text-sm 
  w-full 
  p-3 
  xl:p-5 
  border-b 
  border-slate-500
`
