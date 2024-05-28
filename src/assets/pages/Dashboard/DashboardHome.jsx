
import DashboardHomeState from "./DashboradHome/DashboardHomeState";
import UserProfile from "./DashboradHome/UserProfile";

const DashboardHome = () => {

    return (
        <div>
            <h1 className="text-5xl text-center font-bold">Welcome DashBoard</h1>
            <UserProfile />
            <DashboardHomeState />
        </div>
    );
};

export default DashboardHome;