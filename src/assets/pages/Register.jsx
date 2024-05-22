import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/auth/GoogleLogin";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";

const Register = () => {
    const userInfo = useAuthState(auth);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword, user, loading, error
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSingUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUserWithEmailAndPassword(email
            , password
        )
    }

    useEffect(() => {
        if (userInfo[0]) {
            navigate('/')
        }
        if (error) {
            return (
                console.log(error?.message)
            );
        }
    }, [navigate, userInfo, error])
    console.log(user, loading)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                            et a id nisi.
                        </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSingUp} className="card-body" >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            {
                                error && <p className="text-red-500 text-center text-xl">{error?.message.slice(10, 43)}</p>
                            }
                            <div>
                                <p className="text-center">
                                    ALready have an account ? <Link to={"/login"} className="text-red-600 text-xl">Login</Link>
                                </p>
                            </div>
                        </form>
                        <div className="mx-7 mb-5">
                            <GoogleLogin></GoogleLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
