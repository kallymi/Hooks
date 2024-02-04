import React, { useState } from 'react'

const Welcome = props =>{
    if(props.name==='ned stark'){
    const [backgrounColor,SetBgColor ]= useState('white')
    }
    else{
    const [backgrounColor, setBgColor] = useState('black')
    }

    return (
    <h1 style={{backgroundColor:{bgColor}}} >{props.name}</h1>
    )
}

export default Welcome