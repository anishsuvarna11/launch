import { useState } from 'react'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import React from "react";

const Profile = () => {
  const [input, setInput] = useState('')
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const subscribe = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('./api/subscribe', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailAddress: input
        })
      })
      
      if (res.status === 200) {
        alert('You are subscribed!')
      } else {
        alert(input)
      }
    } catch(err) {
      alert(input)
    }
  }
  
  return (
    <>
    <IndexNavbar fixed />
    <div className = "bg-black h-fit items-center pl-12 pb-32">
<div className="flex bg-slate-100 p-8 justify-center">
  <div className='pt-24 text-white text-3xl'>1. Make a copy of the PDF file below and fill in all of the information.</div>
</div>
<div className="flex bg-slate-100 p-8 justify-center">
  <div className='pt-4 text-white text-3xl'>    2. Download your completed file and send it to ___ as an attachment.</div>
</div>
<div className="flex bg-slate-100 p-8 justify-center">
  <div className='pt-4 text-white text-3xl'>    3. Sit tight as the opportunities start to roll by.</div>
</div>
<div className="pt-16 research-pdf flex justify-center">
                        <h1 className="flex items-center uppercase tracking-wide text-center text-xl mb-5 text-indigo-500 font-extralight semibold">
                            <span className=" inline text-lg leading-tight font-extralight semibold text-red-400">
                                {" "}
                            </span>
                        </h1>
                        <iframe
                            frameBorder="0"
                            scrolling="no"
                            width="600"
                            height="650"
                            src="https://drive.google.com/file/d/1ccXb22ZmYMy6kTJxPdasaUCQXSfMxM7t/preview"
                        />
                    </div>
</div>
<div className = "bg-black"></div>
    </>
  )
}

export default Profile