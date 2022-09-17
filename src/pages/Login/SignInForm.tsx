import React, {useState} from "react";
import s from "./Login.module.scss";
import {useForm, SubmitHandler} from "react-hook-form";
import {authAPI} from "../../api";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {setUser} from "../../redux/user/slice";
import {useNavigate} from "react-router-dom";
import Cookie from 'cookie-universal'


interface MyLoginFormProps {
    onOpenSignIn: () => void;
}

type LoginInputs = {
    email: string;
    password: string;

}


const SignInForm: React.FC<MyLoginFormProps> = ({onOpenSignIn}) => {

    const cookies = Cookie();

    const [responseError, setResponseError] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm<LoginInputs>();

    const dispatch = useAppDispatch();

    const navigate = useNavigate();


    const onSubmit: SubmitHandler<LoginInputs> = async formData => {

        console.log(formData)

        try {
            const {data} = await authAPI.login(formData);
            console.log(data);
            dispatch(setUser(data));
            cookies.set('access_token', data.token, {
                path: "/",
                maxAge: 30 * 24 * 60 * 60
            })
            navigate("/profile");

        } catch (e) {
            setResponseError(true);
            console.log(e);

        }


    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Sign In</h3>
            <div className={s.inputBlock}>
                <label>EMAIL</label>
                <input type="text" {...register("email", {required: true})}/>
                {errors.email && <span>This field is required</span>}
            </div>

            <div className={s.inputBlock}>
                <label>PASSWORD</label>
                <input type="password" {...register("password", {required: true})}/>
                {errors.password && <span>This field is required</span>}
                {responseError && <span>Incorrect Login/Password</span>}
            </div>
            <div className={s.btnBlock}>
                <input type="submit" value={"Sign In"}/>
                <span onClick={onOpenSignIn}> Need to register?</span>
            </div>
        </form>

    );
}


export default SignInForm;