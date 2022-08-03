import React, { useState } from 'react'
import people from "./data"
const Review = () => {
    const[index,setIndex] = useState(0)
    const{id,name,job,image,text} = people[index]

    const checkIndex = (number) => {
        if(number<0)
        {
            return people.length-1
        }

        else if(number>people.length-1)
        {
            return 0
        }
        else
        {
            return number
        }
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index-1;
            return checkIndex(newIndex);
        })
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index+1;
            return checkIndex(newIndex);
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random * people.length)
        if(randomNumber === index)
        {
            randomNumber = index+1;
        }
        setIndex(checkIndex(randomNumber))
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