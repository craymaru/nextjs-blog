import Link from "next/link"

import Layout from "../../components/Layout"
import { getAllPostIds, getPostData } from "../../lib/posts"

const Post = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>
  }
  const { id, title, body } = post

  return (
    <Layout title={title}>
      <p className="m-4">
        {"ID : "}
        {id}
      </p>
      <p className="mb-8 text-xl font-bold">{title}</p>
      <p className="px-10">{body}</p>
      <Link href="/blog">
        <div className="flex cursor-pointer mt-12">
          <svg className="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Back to Blog</span>
        </div>
      </Link>
    </Layout>
  )
}

export default Post

export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { post } = await getPostData(params.id)
  return { props: { post } }
}
