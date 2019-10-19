import React, { useState } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import { connect } from 'react-redux'
import { register } from '../../actions/index'

const RegisterUser = (props) => {
    const [payload, setPayload] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        isMentor: false
    })
    const handleMentor = e => {
        let isActive = payload.isMentor
        setPayload({
            ...payload,
            isMentor: !isActive
        })
        console.log(`changing status master...  ${payload.isMentor.value}`)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setPayload({
            ...props.reg_user.state,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        alert(JSON.stringify(payload))
        console.log(JSON.stringify(payload))
        e.preventDefault()
        props.register(payload)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    value={payload.firstName}
                    onChange={handleChange}
                />
                {/* {console.log(props.reg_user)} */}
                <input
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    value={payload.lastName}
                    onChange={handleChange}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={payload.email}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={payload.password}
                    onChange={handleChange}
                />
                <label htmlFor='isMentor'>
                    I am registering as mentor
                </label>

                <input
                    type='checkbox'
                    name='isMentor'
                    onChange={handleMentor}
                >
                </input>
                <button type='submit'/>
            </form>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        reg_user: state.reg
    }
}

export default connect(mapStateToProps, { register })(RegisterUser)