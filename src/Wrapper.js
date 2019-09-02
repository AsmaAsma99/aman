import React from 'react'
import Photo from './Photos'
import Title from './Title'
import Img from "./Img.jpg"
export default function Wrapper(props) {
    return(
        <div>
          <Photo Src={Img} />

          <Title style={{color:'red'}}>My Name here</Title>

          <Title>My job here</Title>
        </div>  
         )
}