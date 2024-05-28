import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.config";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div>
            <div className="hero mt-10 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="avatar">
                        <div className="w-80 rounded">
                            <img src={user?.photoURL || "/public/placeholder.jpg"} />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Name : {user?.displayName}</h1>
                        <h3 className="py-6 flex text-xl">Email :  <h6> {user?.email}</h6></h3>
                        <button className="btn btn-primary"><Link to={'/dashboard/manage-recipe'}>Go to Product Page</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;