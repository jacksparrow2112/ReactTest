import { useState } from "react"

function MouseHover(props) {
    const myStyle={
        padding:'10px',
        background:'red'
    }
    return (
        <div>
            <div style={myStyle}> Button Clicked {props.count} times</div>
            <button onMouseDown={props.clicker}> Clicker</button>
        </div>
    )
}
export default MouseHover