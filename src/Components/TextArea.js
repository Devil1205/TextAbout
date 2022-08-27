import React, { useState } from 'react'

function TextArea(props) {
    const [text, setText] = useState("")

    const textChange = (element) => {
        setText(element.target.value);
    }

    const toUpper = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase", "success");
    }
    
    const toLower = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", "success");
    }
    
    const removeExtraSpace = () => {
        setText(text.replace(/[ ]+/g, " "));
        props.showAlert("Extra Spaces Removed", "success");
    }
    
    const extractEmail = () => {
        let temp=JSON.stringify(text.split(/[ ]+/)).toLowerCase().match(/[a-z]+@+[a-z]+.com/g)
        setText(JSON.stringify(temp));
        props.showAlert("Email-ID's Extracted", "success");
    }
    
    const eraseAll = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }
    
    const copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }
    
    return (
        <div>
            <div className='container my-4'>
                <h1 className='my-4 text-center'>{props.title}</h1>
                <textarea className="form-control" id="textarea" value={text} onChange={textChange} rows="8" placeholder='Enter the text' style={{backgroundColor: props.theme==="dark"?"rgb(106 81 142 / 15%)":"white", color: props.theme==="dark"?"white":"black"}}></textarea >
                <div className="d-flex justify-content-center my-3">
                    <button disabled={text.match(/[a-z]/g)===null} className="btn btn-primary mx-2" onClick={toUpper}>To Uppercase</button>
                    <button disabled={text.match(/[A-Z]/g)===null} className="btn btn-primary mx-2" onClick={toLower}>To Lowercase</button>
                    <button disabled={JSON.stringify(text.split(/[ ]+/)).toLowerCase().match(/[a-z]+@+[a-z]+.com/g)===null} className="btn btn-warning mx-2" onClick={extractEmail}>Extract Email-ID's</button>
                    <button disabled={text.match(/[ ] +/g)===null} className="btn btn-dark mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
                    <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={eraseAll}>Erase All</button>
                    <button disabled={text.length===0} className="btn btn-success mx-2" onClick={copy}>Copy</button>
                </div>
            </div>
            <div className="container my-4">
                <h2 className='my-4'>Your Text Summary</h2>
                <div>Words : {text.split(/[ ]+/g).filter((element)=>{return element.length!==0}).length}</div> 
                <div>Characters : {text.length}</div>
                <div>{0.008 * text.split(/[ ]+/g).filter((element)=>{return element.length!==0}).length} mins read</div>
                <h3 className='mt-4'>Text Preview</h3>
                <pre>{text}</pre>
            </div>
        </div>
    )
}

export default TextArea