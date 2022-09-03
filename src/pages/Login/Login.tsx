import React, {useState} from "react";
import s from "./Login.module.scss";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";
import SubHeader from "../../components/common/SubHeader/SubHeader";


const Login: React.FC = () => {

    const [formType, setFormType] = useState<"signIn" | "register">("signIn");

    return (
        <div>
            <SubHeader title={"User Profile"}/>
            <div className={s.loginContainer}>
                {formType === "signIn" && <SignInForm onOpenSignIn={() => setFormType("register")}/>}
                {formType === "register" && <RegisterForm onOpenRegister={() => setFormType("signIn")}/>}
            </div>
        </div>
    );
}

export default Login;