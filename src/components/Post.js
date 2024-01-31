import React, { useContext } from 'react'
import {formatISO9075} from 'date-fns'
import { Link } from 'react-router-dom'
import {Mode} from '../UserContext'

const Post = ({post}) => {
  const {mode,setMode} = useContext(Mode)
  return (
    <div className="post">
        <div className="image">
          <Link to={`/post/${post._id}`}>
            <img src={'http://blogvista-pl9x.onrender.com/'+post.cover} alt={post.title}></img>
          </Link>
        </div>
        <div className='texts'>
          <Link to={`/post/${post._id}`}>
          <h2 className={mode?'darkMode':'lightMode'}>{post.title}</h2>
          </Link>
          <div className={mode?'darkMode info':'lightMode info'}>
            <p>{post.author['username']}</p>
            <time>{formatISO9075(new Date(post.createdAt))}</time>
          </div>
          <p className="summary">{post.summary}</p>
        </div>
      </div>
  )
}

export default Post