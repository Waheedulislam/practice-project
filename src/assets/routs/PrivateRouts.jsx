/* eslint-disable react/prop-types */
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import { Navigate } from 'react-router-dom';

const PrivateRouts = ({ children }) => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <p>Loading...</p>
    }
    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }

    return children;
};

export default PrivateRouts;