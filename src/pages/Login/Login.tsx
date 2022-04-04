import React, {useState} from "react";
import s from "./Login.module.scss";
import MyLoginForm from "./MyLoginForm";

interface LoginProps {

}


const Login: React.FC<LoginProps> = () => {

    const [loginMode, setLoginMode] = useState(false);

    return (
        <div>
            <div className={s.loginHeader}>
                <h2>User Profile</h2>
            </div>
            <div className={s.loginContainer}>
                <MyLoginForm isRegister={loginMode} setLoginMode={setLoginMode}/>
            </div>
        </div>
    );
}

export default Login;