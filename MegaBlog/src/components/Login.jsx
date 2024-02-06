import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin} from '../store/authSlice'
import { Button, Input } from './index'
import { UseDispatch, useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div>
        <div>
            <h2>Sign in to your account</h2>
            <p>Don&apos;t have any account?&nbsp;
                <Link to="/signup">Sign Up</Link>
            </p>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit(login)}>
                <div>
                    <Input label="Email: "
                    placeholder="Enter your email"
                    type = "email"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.
                            test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                    />
                    <Input label="Password: "
                    placeholder="Enter your password"
                    type = "password"
                    {...register("password", {
                        required:true,
                        }
                    )
                }/>
                <Button type="submit">Sign In</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login