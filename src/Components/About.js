import React from 'react'
import logo from '../Images/logo.png'

function About(props) {
    return (
        <div className='container my-4'>
            <div className="card" style={{backgroundColor: props.theme==="dark"?"rgb(106 81 142 / 15%)":"white", color: props.theme==="dark"?"white":"black"}}>
                <img src={logo} className="card-img-top my-4" alt="..." style={{width: "200px", alignSelf: "center",filter: props.theme==='dark'?"invert(1)":"invert(0)"}}/>
                    <div className="card-body" style={{display: "flex", justifyContent: "center" }}>
                        <p className="card-text" style={{maxWidth: "600px", textAlign: "justify"}}>TextAbout is a powerful and very useful daily text manipulation ultiliy that can convert text and manipulate it to many forms. You can convert from lower case to uppercase and uppercase to lower case, extract email id's from the text, remove extra spaces etc.</p>
                    </div>
            </div>
        </div>
    )
}

export default About