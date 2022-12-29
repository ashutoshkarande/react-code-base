import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import './authentication.style.scss';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    auth
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.componant';
import SignInForm from '../../components/sign-in-form/sign-in-form.componant';

const Authentication = () => {

    useEffect(() => {
        (async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        })();
    }, []);


    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;