import SignUpAfter from "./pages/SignUpAfter";
import SignUpBefore from "./pages/SignUpBefore";
import SignIn from "./pages/SignIn";
import RegisterNhLocation from "./pages/RegisterNhLocation";
import RegisterNhs from "./pages/RegisterNhs";
import RegisterNhInfo from "./pages/RegisterNhInfo";
import RegisterProfile from "./pages/RegisterProfile";
import RegisterActs from "./pages/RegisterActs";
import RegisterRequests from "./pages/RegisterRequests";
import RegisterPostRequest from "./pages/RegisterPostRequest";
import ManagerHome from "./pages/ManagerHome";
import ManagerNhInfo from "./pages/ManagerNhInfo";
import ManagerRgs from "./pages/ManagerRgs";
import ManagerRequests from "./pages/ManagerRequests";
import ManagerActs from "./pages/ManagerActs";
import ManagerHomeWaiting from "./pages/ManagerHomeWaiting";


const routes =  [
    {
        path: '/',
        component: SignIn
    },
    {
        path: '/signup/after',
        component: SignUpAfter
    },
    {
        path: '/signup/before',
        component: SignUpBefore
    },
    {
        path: '/rg/nh-location',
        component: RegisterNhLocation
    },
    {
        path: '/rg/nhs',
        component: RegisterNhs
    },
    {
        path: '/rg/nh-info',
        component: RegisterNhInfo
    },
    {
        path: '/rg/profile',
        component: RegisterProfile
    },
    {
        path: '/rg/acts',
        component: RegisterActs
    },
    {
        path: '/rg/requests',
        component: RegisterRequests
    },
    {
        path: '/rg/post-request',
        component: RegisterPostRequest
    },
    {
        path: '/mg/home',
        component: ManagerHome
    },
    {
        path: '/mg/waiting',
        component: ManagerHomeWaiting
    },
    {
        path: '/mg/nh-info',
        component: ManagerNhInfo
    },
    {
        path: '/mg/rgs',
        component: ManagerRgs
    },
    {
        path: '/mg/requests',
        component: ManagerRequests
    },
    {
        path: '/mg/acts',
        component: ManagerActs
    },
];

export default routes;