import React, { useState } from 'react'
import people from "./data"
const Review = () => {
    const[index,setIndex] = useState(0)
    const{id,name,job,image,text} = people[index]

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index-1;
            return newIndex;
        })
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index+1;
            return newIndex;
        })
    }

    const randomPerson = () => {

    }
  return (
    <div>
        <div>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <h3>{job}</h3>
            <h3>{text}</h3>
            <div>
                <button onClick={prevPerson}>Back</button>
                <button onClick={nextPerson}>Next</button>
            </div>
            <button onClick={randomPerson}>Random</button>
        </div>
    </div>
  )
}

export default Review