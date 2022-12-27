import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    auth
} from './../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.componant';

const SignIn = () => {

    useEffect(() => {
        (async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        })();
    }, []);

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}> Sign in with Google </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;