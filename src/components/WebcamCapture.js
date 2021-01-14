import React, {useCallback, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { setCameraIamge } from '../features/cameraSlice';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
  };

function WebcamCapture() {
    const webcamRef = useRef(null);
    // const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot(); 
        // console.log(imageSrc);
        // setImage(imageSrc)
        dispatch(setCameraIamge(imageSrc));
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
                onClick = {capture}
            />
            {/* <img src={image} alt="" /> */}
        </div>
    );
};

export default WebcamCapture;