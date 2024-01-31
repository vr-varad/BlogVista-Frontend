import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {formatISO9075} from 'date-fns'
import { UserContext,Mode } from '../UserContext'


const PostPage = () => {
    const {mode} = useContext(Mode)
    const params = useParams()
    const [postinfo,setPostInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const {userInfo} = useContext(UserContext)
    useEffect(()=>{
        async function fetchPost(){
            const response = await fetch(`https://blogvista-pl9x.onrender.com/post/${params['id']}`)
            const data = await response.json()
            setPostInfo(data.article)
            setLoading(false)
        }
        fetchPost()
    },[])
  if(loading) {return <h1>Loading...</h1>}
  else{
    return (
        <div className='post-page'>
            
            <h1 className={mode?'darkMode':'lightMode'}>{postinfo.title}</h1>
            <time>{formatISO9075(new Date(postinfo.createdAt))}</time>
            <h2 className='author'>By {postinfo.author.username}</h2>
            <div className='image'>
                <img src={'https://blogvista-pl9x.onrender.com/'+postinfo['cover']} alt={postinfo.title}></img>
            </div>
            
            <div dangerouslySetInnerHTML={{__html: postinfo.content  }} className={mode?'darkMode':'lightMode'}/>
            {userInfo.id == postinfo.author._id? <div className='edit-row'>
                <Link className='edit-btn' to={`/edit/${postinfo._id}`}>Edit the post</Link>
            </div>:''} 
        </div>
      )
  }
}

export default PostPage