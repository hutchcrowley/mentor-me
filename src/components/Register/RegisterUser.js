import React, {useState} from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {connect} from 'react-redux'
import {register} from '../../actions/index'

const RegisterUser = (props) => {
    const [payload, setPayload] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isMentor: false
    })

    const handleMentor = e => {
        setPayload({
            ...payload,
            isMentor: !isMentor
        })
        
    }

    const handleChange = (e) => {
        e.preventDefault()
        setPayload({
            ...payload,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.register(payload)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    value={payload.firstName}
                    // onChange={handleChange}
                />
                <input 
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    value={payload.lastName}
                    // onChange={handleChange}
                />
                <input 
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={payload.email}
                    // onChange={handleChange}
                />
                <input 
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={payload.password}
                    // onChange={handleChange}
                />
                <input 
                    type='checkbox'
                    name='isMentor'
                    onchange={handleMentor}
                >
                    I am registering as mentor
                </input>
                
            </form>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        register = state.reg
    }
}

export default connect(mapStateToProps, {register})(RegisterUser)