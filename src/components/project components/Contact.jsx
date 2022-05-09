import { useState } from 'react'

function Contact() {

    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [messageInput, setMessageInput] = useState("")

    const [nameInputValid, setNameInputValid] = useState(true)
    const [emailInputValid, setEmailInputValid] = useState(true)
    const [messageInputValid, setMessageInputValid] = useState(true)

    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    function handleInputChange(e) {
        const { name, value } = e.target

        switch (name) {
            case 'name':
                setNameInput(value)
                setNameInputValid(true)
                break
                
            case 'email':
                setEmailInput(value)
                if(emailRegex.test(value)){
                    setEmailInputValid(true)
                }
                break

            default:
                setMessageInput(value)
                setMessageInputValid(true)
                break
        }
    }

    function handleMouseLeave(e) {
        const { name, value } = e.target

        switch (name) {
            case 'name':
                if(value===''){
                    setNameInputValid(false)
                } else {
                    setNameInputValid(true)
                }
                break
                
            case 'email':
                if(value==='' || !emailRegex.test(value)){
                    setEmailInputValid(false)
                } else {
                    setEmailInputValid(true)
                }
                break

            default:
                if(value==='' ){
                    setMessageInputValid(false)
                } else {
                    setMessageInputValid(true)
                }
                break
        }
    }


    return (
        <section className="flex flex-col gap-1 max-w-xl mx-auto overflow-y-scroll p-1">
            <h1 className="text-3xl">Contact Me</h1>
            
            {/* name */}
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" className={nameInputValid ? "form-nice" : "form-nice form-invalid"} value={nameInput} onChange={handleInputChange} onMouseLeave={handleMouseLeave}/>
            {!nameInputValid && <div className='error-msg'>Please provide a name</div>}

            {/* email */}
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" className={emailInputValid ? "form-nice" : "form-nice form-invalid"} value={emailInput} onChange={handleInputChange} onMouseLeave={handleMouseLeave}/>
            {!emailInputValid && <div className='error-msg'>Please provide a valid email</div>}

            {/* message */}
            <label htmlFor="message">Message</label>
            <textarea name="message" id="" cols="30" rows="10" className={messageInputValid ? "form-nice" : "form-nice form-invalid"} value={messageInput} onChange={handleInputChange} onMouseLeave={handleMouseLeave}></textarea>
            {!messageInputValid && <div className='error-msg'>Please provide a nice message :)</div>}

        </section>
    )
}

export default Contact