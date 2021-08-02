import React, { useEffect, useState } from 'react'
import './Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import EventNoteIcon  from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import firebase from "firebase";
import { db } from './firebase';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';



export default function Feed() {   

    const user = useSelector(selectUser);
    const [input ,setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => 
           setPosts(
               snapshot.docs.map((doc) => ({
                   id: doc.id,
                   data: doc.data(),
               }))
           )
       );
    }, []);

    const sendPost = e => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input type="text" onChange={(e)=> setInput(e.target.value)} value={input}   /> 
                        <button type="submit" onClick={sendPost}>send</button>          
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption 
                        Icon={ImageIcon} 
                        title='Photos' 
                        color="#07b5f9" />
                     <InputOption 
                        Icon={SubscriptionsIcon} 
                        title='Videos' 
                        color="#e7a33e" />
                     <InputOption 
                        Icon={EventNoteIcon} 
                        title='Event' 
                        color="#c0cbcd" />
                     <InputOption 
                        Icon={CalendarViewDayIcon} 
                        title='Write article' 
                        color="#7fc15e" />
                </div>
            </div>

            {/* posts */}

            <FlipMove>
            {posts.map(({id, data:{name,description,message,photoUrl} }) => (
              <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl} />  
            ))}
            </FlipMove>

        </div>
    )
   
}
