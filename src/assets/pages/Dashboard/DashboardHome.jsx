import DashboardHomeState from "./DashboradHome/DashboardHomeState";
import DashboardTimeline from "./DashboradHome/DashboardTimeline";

const DashboardHome = () => {
    return (
        <div>
            <h1 className="text-5xl text-center font-bold">Welcome DashBoard</h1>
            <DashboardHomeState />
            <DashboardTimeline />
        </div>
    );
};

export default DashboardHome;