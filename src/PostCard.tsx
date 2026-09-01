import { use } from "react"

export default function Posts({ postData }) {
  
  const posts = use(postData);
  console.log(postData);
  return (

    <div>
    {/* {
        posts.map(post=> post.title)
      } */}
    </div>
  )
}