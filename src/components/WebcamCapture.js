import React, {useCallback, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { setCameraIamge } from '../features/cameraSlice';
import { useHistory } from 'react-router-dom';
import './WebcamCapture.css';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
  };

function WebcamCapture() {
    const webcamRef = useRef(null);
    // const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();
    // console.log("HISTORY WEBCAM", history);

    const capture = useCallback(() => {  // retuens the cashed function which is then passed as props 
        const imageSrc = webcamRef.current.getScreenshot(); 
        // console.log(imageSrc);
        // setImage(imageSrc)
        dispatch(setCameraIamge(imageSrc));
        history.push('./preview'); // REDIRECT
    }, [webcamRef])

    return (
        <div className="webcamCapture">
            <Webcam
                audio={false}
                mirrored={true}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />
            <RadioButtonUncheckedIcon
                className="webcamCapture__button"
                fontSize='large'
                onClick = {capture}
            />
            {/* <img src={image} alt="" /> */}
        </div>
    );
};

export default WebcamCapture;