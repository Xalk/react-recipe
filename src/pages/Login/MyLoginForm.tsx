import React, {Dispatch, SetStateAction} from "react";
import s from "./Login.module.scss";

interface MyLoginFormProps {
    isRegister: boolean;
    setLoginMode: Dispatch<SetStateAction<boolean>>;
}


const MyLoginForm: React.FC<MyLoginFormProps> = ({isRegister, setLoginMode}) => {

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

    }


    return (
        <form onSubmit={handleSubmit}>
            <h3>{isRegister ? "Registration" : "Sign In"}</h3>

            {
                isRegister && (
                    <div className={s.inputBlock}>
                        <label>USERNAME</label>
                        <input type="text"/>
                    </div>
                )
            }

            <div className={s.inputBlock}>
                <label>EMAIL</label>
                <input type="text"/>
            </div>
            <div className={s.inputBlock}>
                <label>PASSWORD</label>
                <input type="password"/>
            </div>

            {
                isRegister && (
                    <div className={s.inputBlock}>
                        <label>CONFIRM PASSWORD</label>
                        <input type="password"/>
                    </div>
                )
            }

            <div className={s.btnBlock}>
                <input type="submit" value={isRegister ? "Register" : "Sign In"}/>
                {
                    isRegister ? <a onClick={() => setLoginMode(false)}>Back to sign in?</a> :
                        <a onClick={() => setLoginMode(true)}> Need to register?</a>
                }
            </div>

        </form>
    );
}

export default MyLoginForm;