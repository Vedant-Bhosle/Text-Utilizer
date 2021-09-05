import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('Enter the text here');
    //    text="new text" //wrong way to change the text
    //    setText("new text")  //correct way to change the text

    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const handlelowclick = (event) => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const clearText= (event) => {
        let newtext ="";
        setText(newtext);
    }
    const copytext= (event) => {
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const Removespace= (event) => {
        let newtext =text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    return (<>
        <div className="container"  style={{color :props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" style={{color :props.mode==='dark'?'white':'black'}}>

                <textarea className="form-control" id="myBox" value={text} onChange={handleonchange} style={{backgroundColor :props.mode==='dark'?'#1e1b25':'white' ,color:props.mode==='dark'?'white':'black'}} rows="10"></textarea>
                <button className="btn btn-primary mt-3 " onClick={handleupclick} >Convert to uppercase</button>
                <button className="btn btn-primary mt-3 mx-2 " onClick={handlelowclick} >Convert to lowercase</button>
                <button className="btn btn-primary mt-3 mx-2 " onClick={clearText} >Clear text</button>
                <button className="btn btn-primary mt-3 mx-2 " onClick={copytext} >Copy text</button>
                <button className="btn btn-primary mt-3 mx-2 " onClick={Removespace} >Remove extra spcaces</button>
            </div>
        </div>
        <div className="container" style={{color :props.mode==='dark'?'white':'black'}}>
            <h1>your text summary </h1>
            <p>Number of words are {text.split(" ").length}  and  number of characters are {text.length}</p>
                    </div>
        </>
    )
}
