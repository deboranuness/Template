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

// dashboard
const EcommerceDashboard = React.lazy(() => import('pages/dashboard/Ecommerce'));

//intranet
const IntranetHome = React.lazy(() => import('pages/intranet/Home'));
const IntranetRegistration = React.lazy(() => import('pages/apps/Registration/Registrations'));
const RegistrationDetails = React.lazy(() => import('pages/apps/Registration/RegistrationDetails'));

// pages
const ErrorPageNotFound = React.lazy(() => import('pages/error/PageNotFound'));
const ErrorPageNotFoundAlt = React.lazy(() => import('pages/error/PageNotFoundAlt'));
const ServerError = React.lazy(() => import('pages/error/ServerError'));

// - other
const Maintenance = React.lazy(() => import('pages/other/Maintenance'));

// uikit
const Accordions = React.lazy(() => import('pages/uikit/Accordions'));
const Alerts = React.lazy(() => import('pages/uikit/Alerts'));
const Avatars = React.lazy(() => import('pages/uikit/Avatars'));
const Badges = React.lazy(() => import('pages/uikit/Badges'));
const Breadcrumbs = React.lazy(() => import('pages/uikit/Breadcrumb'));
const Buttons = React.lazy(() => import('pages/uikit/Buttons'));
const Cards = React.lazy(() => import('pages/uikit/Cards'));
const Carousels = React.lazy(() => import('pages/uikit/Carousel'));
const Dropdowns = React.lazy(() => import('pages/uikit/Dropdowns'));
const EmbedVideo = React.lazy(() => import('pages/uikit/EmbedVideo'));
const Grid = React.lazy(() => import('pages/uikit/Grid'));
const ListGroups = React.lazy(() => import('pages/uikit/ListGroups'));
const Modals = React.lazy(() => import('pages/uikit/Modals'));
const Notifications = React.lazy(() => import('pages/uikit/Notifications'));
const Offcanvases = React.lazy(() => import('pages/uikit/Offcanvas'));
const Placeholders = React.lazy(() => import('pages/uikit/Placeholders'));
const Paginations = React.lazy(() => import('pages/uikit/Paginations'));
const Popovers = React.lazy(() => import('pages/uikit/Popovers'));
const Progress = React.lazy(() => import('pages/uikit/Progress'));
const Ribbons = React.lazy(() => import('pages/uikit/Ribbons'));
const Spinners = React.lazy(() => import('pages/uikit/Spinners'));
const Tabs = React.lazy(() => import('pages/uikit/Tabs'));
const Tooltips = React.lazy(() => import('pages/uikit/Tooltips'));
const Typography = React.lazy(() => import('pages/uikit/Typography'));
const DragDrop = React.lazy(() => import('pages/uikit/DragDrop'));
const RangeSliders = React.lazy(() => import('pages/uikit/RangeSliders'));
const Ratings = React.lazy(() => import('pages/uikit/Ratings'));

// icons
const Dripicons = React.lazy(() => import('pages/icons/Dripicons'));
const MDIIcons = React.lazy(() => import('pages/icons/MDIIcons'));
const Unicons = React.lazy(() => import('pages/icons/Unicons'));

// forms
const BasicForms = React.lazy(() => import('pages/forms/Basic'));
const FormAdvanced = React.lazy(() => import('pages/forms/Advanced'));
const FormValidation = React.lazy(() => import('pages/forms/Validation'));
const FormWizard = React.lazy(() => import('pages/forms/Wizard'));
const FileUpload = React.lazy(() => import('pages/forms/FileUpload'));
const Editors = React.lazy(() => import('pages/forms/Editors'));

// charts
const ApexChart = React.lazy(() => import('pages/charts/Apex'));
const ChartJs = React.lazy(() => import('pages/charts/ChartJs'));

// tables
const BasicTables = React.lazy(() => import('pages/tables/Basic'));
const AdvancedTables = React.lazy(() => import('pages/tables/Advanced'));

// widgets
const Widgets = React.lazy(() => import('pages/uikit/Widgets'));

// maps
const GoogleMaps = React.lazy(() => import('pages/maps/GoogleMaps'));
const VectorMaps = React.lazy(() => import('pages/maps/VectorMaps'));

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
                    path: 'dashboard',
                    children: [
                        {
                            path: 'ecommerce',
                            element: <LoadComponent component={EcommerceDashboard} />,
                        },
                    ],
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
                {
                    path: 'pages',
                    children: [
                        {
                            path: 'error-404-alt',
                            element: <LoadComponent component={ErrorPageNotFoundAlt} />,
                        },
                    ],
                },
                {
                    path: 'ui',
                    children: [
                        {
                            path: 'base-ui',
                            children: [
                                {
                                    path: 'accordions',
                                    element: <LoadComponent component={Accordions} />,
                                },
                                {
                                    path: 'alerts',
                                    element: <LoadComponent component={Alerts} />,
                                },
                                {
                                    path: 'avatars',
                                    element: <LoadComponent component={Avatars} />,
                                },
                                {
                                    path: 'badges',
                                    element: <LoadComponent component={Badges} />,
                                },
                                {
                                    path: 'breadcrumb',
                                    element: <LoadComponent component={Breadcrumbs} />,
                                },
                                {
                                    path: 'buttons',
                                    element: <LoadComponent component={Buttons} />,
                                },
                                {
                                    path: 'cards',
                                    element: <LoadComponent component={Cards} />,
                                },
                                {
                                    path: 'carousel',
                                    element: <LoadComponent component={Carousels} />,
                                },
                                {
                                    path: 'dropdowns',
                                    element: <LoadComponent component={Dropdowns} />,
                                },
                                {
                                    path: 'embedvideo',
                                    element: <LoadComponent component={EmbedVideo} />,
                                },
                                {
                                    path: 'grid',
                                    element: <LoadComponent component={Grid} />,
                                },
                                {
                                    path: 'listgroups',
                                    element: <LoadComponent component={ListGroups} />,
                                },
                                {
                                    path: 'modals',
                                    element: <LoadComponent component={Modals} />,
                                },
                                {
                                    path: 'notifications',
                                    element: <LoadComponent component={Notifications} />,
                                },
                                {
                                    path: 'offcanvas',
                                    element: <LoadComponent component={Offcanvases} />,
                                },
                                {
                                    path: 'placeholders',
                                    element: <LoadComponent component={Placeholders} />,
                                },
                                {
                                    path: 'paginations',
                                    element: <LoadComponent component={Paginations} />,
                                },
                                {
                                    path: 'popovers',
                                    element: <LoadComponent component={Popovers} />,
                                },
                                {
                                    path: 'progress',
                                    element: <LoadComponent component={Progress} />,
                                },
                                {
                                    path: 'ribbons',
                                    element: <LoadComponent component={Ribbons} />,
                                },
                                {
                                    path: 'spinners',
                                    element: <LoadComponent component={Spinners} />,
                                },
                                {
                                    path: 'tabs',
                                    element: <LoadComponent component={Tabs} />,
                                },
                                {
                                    path: 'tooltips',
                                    element: <LoadComponent component={Tooltips} />,
                                },
                                {
                                    path: 'typography',
                                    element: <LoadComponent component={Typography} />,
                                },
                            ],
                        },
                        {
                            path: 'widgets',
                            element: <LoadComponent component={Widgets} />,
                        },
                        {
                            path: 'extended',
                            children: [
                                {
                                    path: 'dragdrop',
                                    element: <LoadComponent component={DragDrop} />,
                                },
                                {
                                    path: 'rangesliders',
                                    element: <LoadComponent component={RangeSliders} />,
                                },
                                {
                                    path: 'ratings',
                                    element: <LoadComponent component={Ratings} />,
                                },
                            ],
                        },
                        {
                            path: 'icons',
                            children: [
                                {
                                    path: 'unicons',
                                    element: <LoadComponent component={Unicons} />,
                                },
                                {
                                    path: 'mdi',
                                    element: <LoadComponent component={MDIIcons} />,
                                },
                                {
                                    path: 'dripicons',
                                    element: <LoadComponent component={Dripicons} />,
                                },
                            ],
                        },
                        {
                            path: 'forms',
                            children: [
                                {
                                    path: 'basic',
                                    element: <LoadComponent component={BasicForms} />,
                                },
                                {
                                    path: 'advanced',
                                    element: <LoadComponent component={FormAdvanced} />,
                                },
                                {
                                    path: 'validation',
                                    element: <LoadComponent component={FormValidation} />,
                                },
                                {
                                    path: 'wizard',
                                    element: <LoadComponent component={FormWizard} />,
                                },
                                {
                                    path: 'upload',
                                    element: <LoadComponent component={FileUpload} />,
                                },
                                {
                                    path: 'editors',
                                    element: <LoadComponent component={Editors} />,
                                },
                            ],
                        },
                        {
                            path: 'tables',
                            children: [
                                {
                                    path: 'basic',
                                    element: <LoadComponent component={BasicTables} />,
                                },
                                {
                                    path: 'advanced',
                                    element: <LoadComponent component={AdvancedTables} />,
                                },
                            ],
                        },
                        {
                            path: 'charts',
                            children: [
                                {
                                    path: 'apex',
                                    element: <LoadComponent component={ApexChart} />,
                                },
                                {
                                    path: 'chartjs',
                                    element: <LoadComponent component={ChartJs} />,
                                },
                            ],
                        },
                        {
                            path: 'maps',
                            children: [
                                {
                                    path: 'googlemaps',
                                    element: <LoadComponent component={GoogleMaps} />,
                                },
                                {
                                    path: 'vectormaps',
                                    element: <LoadComponent component={VectorMaps} />,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ]);
};

export { AllRoutes };
