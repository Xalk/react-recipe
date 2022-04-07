import React, {useState} from "react";
import s from "./Login.module.scss";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";

interface LoginProps {

}


const Login: React.FC<LoginProps> = () => {

    const [formType, setFormType] = useState<"signIn" | "register">("signIn");

    return (
        <div>
            <div className={s.loginHeader}>
                <h2>User Profile</h2>
            </div>
            <div className={s.loginContainer}>
                {formType ==="signIn" && <SignInForm onOpenSignIn={()=>setFormType("register")}/>}
                {formType ==="register" && <RegisterForm onOpenRegister={()=>setFormType("signIn")}/>}
            </div>
        </div>
    );
}

export default Login;