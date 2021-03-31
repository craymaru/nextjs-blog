import Link from "next/link"

const Post = ({ post }) => {
  const { id } = post
  return (
    <div>
      <span>{id}</span>
      {" : "}
      <Link href={`/posts/${id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">{post.title}</span>
      </Link>{" "}
    </div>
  )
}

export default Post
