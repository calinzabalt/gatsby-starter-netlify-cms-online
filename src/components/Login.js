import React, { Component } from 'react'
import { Link } from 'gatsby'
//Imports Netlify Identity script into 
function initNetlifyIdentity() {
    console.log("initNetlifyIdentity called.")
    const script = document.createElement("script");
  
    script.src= "https://identity.netlify.com/v1/netlify-identity-widget.js"
    script.async = true;
  
    document.body.appendChild(script);
}

function openNetlifyModal() {
    const netlifyIdentity = window.netlifyIdentity;

    if (netlifyIdentity)
       netlifyIdentity.open();
    else
        console.log('netlifyIdentity not defined')
}

class NetlifyIdentity extends Component {
    componentDidMount() {
        initNetlifyIdentity();
    }
    render() {
        return (<div></div>)
    }
}

const Login = () => {
        return (
            <div className="login">
            <NetlifyIdentity/>
            <Link className="btn" onClick={() => { openNetlifyModal() }}>Login / Sign up</Link>
            </div>
    )
}

export default Login