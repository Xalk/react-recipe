import React from "react";
import s from "./Login.module.scss";
import {SubmitHandler, useForm} from "react-hook-form";

interface RegisterFormProps {
    onOpenRegister: () => void;
}

type RegisterInputs = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({onOpenRegister}) => {

    const {register, handleSubmit, formState: {errors}} = useForm<RegisterInputs>();

    const onSubmit: SubmitHandler<RegisterInputs> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Registration</h3>

            <div className={s.inputBlock}>
                <label>USERNAME</label>
                <input type="text" {...register("username", {required: true})}/>
                {errors.email && <span>This field is required</span>}
            </div>


            <div className={s.inputBlock}>
                <label>EMAIL</label>
                <input type="text" {...register("email", {required: true})}/>
                {errors.email && <span>This field is required</span>}
            </div>

            <div className={s.inputBlock}>
                <label>PASSWORD</label>
                <input type="password" {...register("password", {required: true})}/>
                {errors.email && <span>This field is required</span>}
            </div>


            <div className={s.inputBlock}>
                <label>CONFIRM PASSWORD</label>
                <input type="password" {...register("confirmPassword", {required: true})}/>
                {errors.email && <span>This field is required</span>}
            </div>


            <div className={s.btnBlock}>
                <input type="submit" value={"Register"}/>

                <span onClick={onOpenRegister}>Back to sign in?</span>


            </div>

        </form>
    );
}

export default RegisterForm;