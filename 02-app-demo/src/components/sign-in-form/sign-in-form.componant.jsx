import { useState } from "react";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            setFormFields(defaultFormFields);
        } catch (error) {
            console.log(error);
        }

    }

    const signInWIthGoogle = async () => {
        const response = await signInWithGooglePopup();
        await createUserDocumentFromAuth(response.user);
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' onChange={handleChange} name="email" value={email} required />
                <FormInput label='Password' type='password' onChange={handleChange} name="password" value={password} required />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType='google' onClick={signInWIthGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
};

export default SignInForm;
