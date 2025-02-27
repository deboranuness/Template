import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { DefaultLayout, VerticalLayout, HorizontalLayout, DetachedLayout, FullLayout } from 'layouts';
import PrivateRoute from './PrivateRoute';
import Root from './Root';
import { LayoutTypes } from 'appConstants';
import { useRedux } from 'hooks';

// lazy load all the views

// auth
const Login = React.lazy(() => import('pages/account/Login2'));
const Logout = React.lazy(() => import('pages/account/Logout2'));
const Register = React.lazy(() => import('pages/account/Register2'));
const Confirm = React.lazy(() => import('pages/account/Confirm2'));
const ForgetPassword = React.lazy(() => import('pages/account/ForgetPassword2'));
const LockScreen = React.lazy(() => import('pages/account/LockScreen2'));

//intranet
const IntranetHome = React.lazy(() => import('pages/intranet/Home'));
const IntranetRegistration = React.lazy(() => import('pages/apps/Registration/Registrations'));
const RegistrationDetails = React.lazy(() => import('pages/apps/Registration/RegistrationDetails'));

// pages
const ErrorPageNotFound = React.lazy(() => import('pages/error/PageNotFound'));
const ServerError = React.lazy(() => import('pages/error/ServerError'));

// - other
const Maintenance = React.lazy(() => import('pages/other/Maintenance'));

const loading = () => <div className=""></div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    const { appSelector } = useRedux();

    const { layout } = appSelector((state) => ({
        layout: state.Layout,
    }));

    const getLayout = () => {
        let layoutCls: React.ComponentType = VerticalLayout;

        switch (layout.layoutType) {
            case LayoutTypes.LAYOUT_HORIZONTAL:
                layoutCls = HorizontalLayout;
                break;
            case LayoutTypes.LAYOUT_DETACHED:
                layoutCls = DetachedLayout;
                break;
            case LayoutTypes.LAYOUT_FULL:
                layoutCls = FullLayout;
                break;
            default:
                layoutCls = VerticalLayout;
                break;
        }
        return layoutCls;
    };
    let Layout = getLayout();

    return useRoutes([
        { path: '/', element: <Root /> },
        {
            // public routes
            path: '/',
            element: <DefaultLayout />,
            children: [
                {
                    path: 'account',
                    children: [
                        { path: 'login', element: <LoadComponent component={Login} /> },
                        { path: 'register', element: <LoadComponent component={Register} /> },
                        { path: 'confirm', element: <LoadComponent component={Confirm} /> },
                        { path: 'forget-password', element: <LoadComponent component={ForgetPassword} /> },
                        { path: 'lock-screen', element: <LoadComponent component={LockScreen} /> },
                        { path: 'logout', element: <LoadComponent component={Logout} /> },
                        { path: 'login2', element: <LoadComponent component={Login} /> },
                        { path: 'register2', element: <LoadComponent component={Register} /> },
                        { path: 'confirm2', element: <LoadComponent component={Confirm} /> },
                        { path: 'forget-password2', element: <LoadComponent component={ForgetPassword} /> },
                        { path: 'lock-screen2', element: <LoadComponent component={LockScreen} /> },
                        { path: 'logout2', element: <LoadComponent component={Logout} /> },
                    ],
                },
                {
                    path: 'error-404',
                    element: <LoadComponent component={ErrorPageNotFound} />,
                },
                {
                    path: 'error-500',
                    element: <LoadComponent component={ServerError} />,
                },
                {
                    path: 'maintenance',
                    element: <LoadComponent component={Maintenance} />,
                },
            ],
        },
        {
            // auth protected routes
            path: '/',
            element: <PrivateRoute roles={'Admin'} component={Layout} />,
            children: [
                {
                    path: 'intranet',
                    element: <LoadComponent component={IntranetHome} />,
                },
                {
                    path: 'intranet',
                    children: [
                        {
                            path: 'home',
                            element: <LoadComponent component={IntranetHome} />,
                        },
                        {
                            path: 'cadastro',
                            element: <LoadComponent component={IntranetRegistration} />,
                        },
                        {
                            path: 'cadastro-detalhes',
                            element: <LoadComponent component={RegistrationDetails} />,
                        },
                    ],
                },
            ],
        },
    ]);
};

export { AllRoutes };
