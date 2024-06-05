import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea"

/*function createNote(note){
    return (<Note 
    key={note.key}
    title={note.title}
    content={note.content}
    />);
}
*/

function App(){

    const [noteData,setNoteData]=useState([]);

    function addNote(inputText){
        setNoteData((prev)=>{
            return [...prev,inputText];
        });
    }

    function deleteNote(id){
        setNoteData((prev)=>{
            return prev.filter((notePad,index)=>{
                return index!==id;
            });
        });
    }
    
    return (
        <div>
            <Header />
            <InputArea onAdd={addNote}/>
            {noteData.map((note,index)=>{
                return (<Note 
                key={index} 
                id={index} 
                titleText={note.title} 
                contentText={note.content} 
                 deletion={deleteNote} 
                />
            );
            })}
            <Footer />
        </div>
    );
}

export default App;