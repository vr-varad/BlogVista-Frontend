import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import Post from '../components/Post'
import {UserContext} from '../UserContext'
import {formatISO9075} from 'date-fns'

const ProfilePage = () => {
    const [data,setData] = useState([])
    const [user,setUser] = useState({})
    const {userInfo} = useContext(UserContext)
  const {id} = useParams()
  useEffect(()=>{
    fetch('https://blogvista-pl9x.onrender.com/posts',{method:'GET'})
    .then(res=>res.json())
    .then(post=>setData(post.filter(singlePost => singlePost.author._id == id)))
    fetch(`https://blogvista-pl9x.onrender.com/userProfile/${id}`,{method:'GET'})
    .then(res=>res.json())
    .then(user=>setUser(user))

  },[])
  if(!user.user){
    return <h1>Loading....</h1>
  }else{
    return (
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-photo">
              {/* You can replace the image source with the actual user's photo */}
              <img src={`https://robohash.org/${user.rand}.png`} alt="User Photo" />
            </div>
            <div className="profile-info">
              <h2>{user.user.username}</h2>
              <p>Date of Joining: {`${user.user.updatedAt}`.slice(0, 10)}</p>
            </div>
            
          </div>
            {data.map((post)=>{
                return <Post key={post._id} post={post}/>
            })}
        </div>
      );
  }
};

export default ProfilePage;
