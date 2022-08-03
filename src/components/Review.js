import React, { useState } from 'react'
import people from "./data"
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';
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
    <div className=''>
        <div className='flex flex-col justify-center items-center shadow-xl rounded-xl bg-slate-100 p-10'>
            <img src={image} alt={name} className="w-[200px] h-[200px] rounded-full"/>
            <h2 className='text-[20px] font-bold pt-5'>{name}</h2>
            <h2 className='text-blue-400 uppercase'>{job}</h2>
            <br/>
            <h3 className=''>{text}</h3>
            <br/>
            <div>
                <button onClick={prevPerson}><FaChevronLeft/></button>
                <button onClick={nextPerson}><FaChevronRight/></button>
            </div>
            <button className='border-2 border-blue-900 bg-sky-200 px-1 ' onClick={randomPerson}>Random</button>
        </div>
    </div>
  )
}

export default Review