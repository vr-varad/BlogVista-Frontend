import React, { useContext, useEffect, useState } from 'react'
import Post from '../components/Post'
import { Search } from '../UserContext'
import SearchBar from '../components/SearchBar'
const IndexPage = () => {
  const [posts,setPosts] = useState([])
  const {searchTerm} = useContext(Search)
  const [filteredPosts,setFilterPosts] = useState(posts)
  
  useEffect(() => {
    const regex = new RegExp(searchTerm, 'i');
    setFilterPosts(posts.filter(post => regex.test(post.title)))
  }, [searchTerm]);
  useEffect(()=>{
    fetch('http://blogvista-pl9x.onrender.com/post',{
      method:'GET'
    }).then(response=>response.json()).then(posts=>{
      setPosts(posts)
      setFilterPosts(posts)})
  },[])
  return (
    <>
    <SearchBar/>
    {filteredPosts.map(post=>{
      return <Post key={post._id} post={post} />
    })}
    </>
  )
}

export default IndexPage