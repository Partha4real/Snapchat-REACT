import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectSelectedImage } from '../features/appSlice';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';
import './ChatView.css'
import { lightBlue } from '@material-ui/core/colors';

function ChatView(props) {
    const selectedImage = useSelector(selectSelectedImage);
    const history = useHistory();
    
    useEffect(() => {
        if (!selectedImage) {
            exit();
        }
    }, [selectedImage]);

    const exit = () => {
        history.replace('/chats')
    }

    return (
        <div className="chatView">
            <img src={selectedImage} onClick={exit} alt="" />
            <div className="chatView__timer">
                <CountdownCircleTimer 
                    isPlaying
                    duration={10}
                    strokeWidth={3}
                    size={20}
                    colors={[
                        ["#a6c1ed", 0.33],
                        ["#f0a1a1", 0.33],
                        ["#f54040", 0.33],
                    ]}
                >
                    {({remainingTime}) => {
                        if(remainingTime === 0) {
                            exit();
                        }
                        // return remainingTime;  // prints the time
                    }}
                </CountdownCircleTimer>
            </div>
        </div>
    );
}

export default ChatView;