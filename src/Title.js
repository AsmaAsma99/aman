import React from 'react' 

export default function Title(props) {
    
    return(
        <div>
           <div style={props.style}>{props.children}</div>
        </div>
    )
}
