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
<iframe src="https://form.jotform.com/230008669307152" className="border-none w-full h-full" style={{height: '100vh'}} />

</div>
<div className = "bg-black"></div>
    </>
  )
}

export default Profile