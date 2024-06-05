import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function InputArea(props){

    const [inputText,setInput]=useState({
        title:"",
        content:""
    });

    const [zoomin,setZoom]=useState(false);
    const[rowVal,setRow]=useState(1);

    function handleChange(event){
       const {name,value}=event.target;

       setInput((prev)=>{
        return {...prev,
            [name]:value
        };
       });

    }

    function expand(){
        setZoom((prev)=>{
            return !prev;
           });
           setRow(3);
    }

   function submitNote(event){
    props.onAdd(inputText);
    setInput({
       title:"",
       content:""
    });
    event.preventDefault();
   }

    return(<div>
        <form className="create-note">
        {zoomin?
        <input type="text" name="title" onChange={handleChange} value={inputText.title} placeholder="Title" />:null}
        <textarea name="content" onClick={expand} onChange={handleChange} value={inputText.content} placeholder="Take a note..." rows={rowVal} />
        <Zoom in={zoomin}>
           <Fab onClick={submitNote}>
                <AddIcon />
            </Fab>
        </Zoom>
        {/* By using Floating Buttons from Material UI */}
        </form>
    </div>);
}

export default InputArea;