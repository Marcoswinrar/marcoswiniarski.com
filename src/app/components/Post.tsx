import Link from "next/link"
import { Post } from "../utils/interfaces"

interface Props {
  post: Post
}

const Post = ({ post }: Props) => {
  return (
    <Link href={""}>
      <article className="px-4 py-4 border-double border-8 border-indigo-700">
        <div className="hover:text-pink-600">
          {/* <time className="text-sm">{post.publishedAt}</time> */}
          <h1 className="sm:text-lg mb-2">{post.title}</h1>
          <h2>{post.excerpt}</h2>
          {post.tags?.map((tag) => (
            <span key={tag._id}>{tag.name}</span>
          ))}
        </div>
      </article>
    </Link>
  )
}

export default Post
