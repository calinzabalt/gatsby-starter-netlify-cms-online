import React, { Component } from 'react'
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
            <h5 onClick={() => { openNetlifyModal() }}>Login</h5>
            </div>
    )
}

export default Login