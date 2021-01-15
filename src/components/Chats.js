import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import './Chats.css';
import { auth, db } from '../firebase';
import Chat from './Chat';
import { selectUser } from '../features/appSlice';
import { useSelector } from 'react-redux';

function Chats(props) {
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection('posts') 
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))))
    }, [])
    console.log(posts);
    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar src={user.profilePic} onClick={() => auth.signOut()} className="chats__avatar" />
                <div className="chats__search">
                    <SearchIcon />
                    <input placeholder="Friends" type="text" />
                    <ChatBubbleIcon className="chats__chatIcon" />
                </div>
            </div>
            <div className="chats__posts">
                {posts.map(({id, data: {profilePic, username, timestamp, imageUrl, read}}) => (
                    <Chat 
                        key={id} 
                        id={id}
                        username={username}
                        timestamp={timestamp}
                        imageUrl={imageUrl}
                        read={read}
                        profilePic={profilePic}
                    />
                ))}
            </div>
        </div>
    );
}

export default Chats;