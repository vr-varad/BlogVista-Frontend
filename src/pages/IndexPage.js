import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

const IndexPage = () => {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/post',{
      method:'GET'
    }).then(response=>response.json()).then(posts=>setPosts(posts))
  },[])
  return (
    <>
    {posts.map(post=>{
      return <Post key={post._id} post={post} />
    })}
    </>
  )
}

export default IndexPage