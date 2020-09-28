import React, { useState, useEffect } from 'react'
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import { auth } from '../../helper/Firebase';
import './Auth.scss';
import { useHistory } from 'react-router-dom';

function Auth() {
    const history = useHistory();
    const [authType, setAuthType] = useState('signIn');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) history.push('/main')
        })
    }, [])

    return (
        <div className='auth'>
            {authType === 'signIn' ?
                <div className='container'>
                    <SignIn />
                    <p>New here? <span onClick={() => setAuthType('signUp')}>Create account.</span></p>
                </div>
                :
                <div className='container'>
                    <SignUp />
                    <p>Have an account? <span onClick={() => setAuthType('signIn')}>Sign In.</span></p>
                </div>
            }
        </div>
    )
}

export default Auth
