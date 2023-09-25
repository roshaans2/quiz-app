import { useRef } from "react";
export default function Start({setUsername}){
    const inputRef = useRef();

    const handleClick = () => {
        setUsername(inputRef.current.value)
    }

    return(
        <div className="start">
            <input placeholder="Enter your Name" className="startInput" ref={inputRef} />
            <button className="startButton" onClick={handleClick}>Start</button>
        </div>
    )
}