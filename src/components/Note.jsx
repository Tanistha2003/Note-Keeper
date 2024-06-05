import React,{useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props){

    function handleClick(){
        props.deletion(props.id);
    }

    return (
        <div className="note">
            <h1>{props.titleText}</h1>
            <p>{props.contentText}</p>
            <button onClick={handleClick} className="buttonStyle"><DeleteIcon /></button>
        </div>
    );
}

export default Note;