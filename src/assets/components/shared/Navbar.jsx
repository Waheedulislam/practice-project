import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    const handleSignOut = async () => {
        const success = await signOut();
        if (success) {
            alert('Log Out')
        }
    }
    return (
        <div className="px-16">

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>About</Link>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">King</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {!user?.email ?
                        <>
                            <Link to={'/login'} className="btn mr-2">Login</Link>
                            <Link to={'/register'} className="btn">Register</Link>
                        </> :
                        <div className="flex gap-4 justify-center">

                            <Link to={'/dashboard'} className="btn">DashBoard</Link>
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL || "/public/placeholder.jpg"} />
                                </div>
                            </div>
                            <button className="btn" onClick={handleSignOut}>Log Out</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
