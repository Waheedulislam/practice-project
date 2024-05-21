import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleWithGoogleLogin = () => {
        signInWithGoogle();
    };
    console.log(user, loading, error);
    return (
        <div>
            <button onClick={() => handleWithGoogleLogin()}
                className="bg-orange-400 px-5 py-4 w-full rounded-lg">
                Login With Google
            </button>
        </div>
    );
};

export default GoogleLogin;
