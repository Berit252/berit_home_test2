import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Email(){

    const ref = useRef()
    const [ success, setSuccess ] = useState(null)

    const handleSubmit =(e)=>{
    e.preventDefault()

    emailjs.sendForm('service_252Tang', 'template_0ttbc0s', ref.current, 'u87YJ9VQNy9FBF0uZ').then((result) => {
        console.log(result.text)
        setSuccess(true)
    }, (error) => {
        console.log(error.text)
        setSuccess(false)
    })
    }

    return (
    <form ref={ ref } onSubmit={ handleSubmit } style={{ display: 'flex', flexDirection: 'row' }}>

        <div style={{ flex: '6', display: 'flex', flexDirection: 'column', color: 'white' }}>
            <input placeholder='Name' name='name' style={{ border: 'none', borderRadius: '5px', backgroundColor: '#c6efffa0', padding: '5px', marginBottom: '5px' }} />
            <input placeholder='Email' email='email' style={{ border: 'none', borderRadius: '5px', backgroundColor: '#b5ebfca2', padding: '5px', marginBottom: '5px' }} />
            <textarea placeholder='Anything you want to tell me' rows={ 5 } name='message' style={{ border: 'none', borderRadius: '5px', backgroundColor: '#ddf1f9b6', padding: '5px' }} />
        </div>

        <div style={{ flex: '1' }}>
            <button type='submit' style={{ border: 'none', borderRadius: '5px', backgroundColor: '#b1cff5a9', height: '145px', padding: '5px', marginLeft: '5px', cursor: 'pointer' }}>Send</button>
        </div>
        
        {success && <div style={{ maxWidth:'20px', fontSize: '14px', color:'#eeeeee81' }}>Your message has been sent. Thank you~</div>}
    </form>
  )
}