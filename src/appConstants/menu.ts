export type MenuItemType = {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
        variant: string;
        text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemType[];
};

const MENU_ITEMS: MenuItemType[] = [
    { key: 'intranet', label: 'INTRANET', isTitle: true },
    {
        key: 'communication',
        label: 'COMUNICAÇÃO',
        isTitle: false,
        icon: 'uil-comment-alt-message',
        children: [
            {
                key: 'board',
                label: 'Mural',
                url: '/intranet/cadastro',
                parentKey: 'communication',
            },
            {
                key: 'contacts',
                label: 'Contatos',
                url: '/intranet/cadastro',
                parentKey: 'communication',
            },
        ],
    },
    {
        key: 'security',
        label: 'SEGURANÇA',
        isTitle: false,
        icon: 'uil-shield-check',
        children: [
            {
                key: 'cctv',
                label: 'CFTV',
                url: '/intranet/cadastro',
                parentKey: 'security',
            },
            {
                key: 'gatehouse',
                label: 'Portaria',
                url: '/intranet/cadastro',
                parentKey: 'security',
            },
        ],
    },
    {
        key: 'schedules',
        label: 'AGENDAMENTOS',
        isTitle: false,
        icon: 'uil-calendar-alt',
        children: [
            {
                key: 'rooms',
                label: 'Salas',
                url: '/intranet/cadastro',
                parentKey: 'schedules',
            },
            {
                key: 'vehicles',
                label: 'Veículos',
                url: '/intranet/cadastro',
                parentKey: 'schedules',
            },
        ],
    },
    {
        key: 'documents',
        label: 'DOCUMENTOS',
        isTitle: false,
        icon: 'uil-paperclip',
        children: [
            {
                key: 'hr-policies',
                label: 'Políticas RH',
                url: '/intranet/cadastro',
                parentKey: 'documents',
            },
        ],
    },
    {
        key: 'processes',
        label: 'PROCESSOS',
        isTitle: false,
        icon: 'uil-forward',
        children: [
            {
                key: 'ITs',
                label: 'Mural',
                url: '/intranet/cadastro',
                parentKey: 'processes',
            },
            {
                key: 'workflow',
                label: 'Workflow',
                url: '/intranet/cadastro',
                parentKey: 'processes',
            },
        ],
    },
    {
        key: 'dashboards',
        label: 'DASHBOARDS',
        isTitle: false,
        icon: 'uil-graph-bar',
        children: [
            {
                key: 'sales-kpis',
                label: 'KPIs Vendas',
                url: '/intranet/cadastro',
                parentKey: 'dashboards',
            },
            {
                key: 'productivity',
                label: 'Produtividade',
                url: '/intranet/cadastro',
                parentKey: 'dashboards',
            },
        ],
    },
    {
        key: 'access',
        label: 'ACESSOS',
        isTitle: false,
        icon: 'uil-external-link-alt',
        children: [
            {
                key: 'erp',
                label: 'ERP',
                url: '/intranet/cadastro',
                parentKey: 'access',
            },
            {
                key: 'crm',
                label: 'CRM',
                url: '/intranet/cadastro',
                parentKey: 'access',
            },
        ],
    },

    { key: 'custom', label: 'Custom', isTitle: true },
    {
        key: 'pages',
        label: 'Pages',
        isTitle: false,
        icon: 'uil-copy-alt',
        children: [
            {
                key: 'page-maintenance',
                label: 'Maintenance',
                url: '/maintenance',
                target: '_blank',
                parentKey: 'pages',
            },
            {
                key: 'page-error-404',
                label: 'Error - 404',
                url: '/error-404',
                parentKey: 'pages',
            },
            {
                key: 'page-error-404-alt',
                label: 'Error - 404-alt',
                url: '/pages/error-404-alt',
                parentKey: 'pages',
            },
            {
                key: 'page-error-500',
                label: 'Error - 500',
                url: '/error-500',
                parentKey: 'pages',
            },
        ],
    },

    { key: 'components', label: 'Components', isTitle: true },
    {
        key: 'base-ui',
        label: 'Base UI',
        isTitle: false,
        icon: 'uil-box',
        children: [
            {
                key: 'base-ui-accordions',
                label: 'Accordions',
                url: '/ui/base-ui/accordions',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-alerts',
                label: 'Alerts',
                url: '/ui/base-ui/alerts',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-avatars',
                label: 'Avatars',
                url: '/ui/base-ui/avatars',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-badges',
                label: 'Badges',
                url: '/ui/base-ui/badges',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-breadcrumb',
                label: 'Breadcrumb',
                url: '/ui/base-ui/breadcrumb',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-buttons',
                label: 'Buttons',
                url: '/ui/base-ui/buttons',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-cards',
                label: 'Cards',
                url: '/ui/base-ui/cards',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-carousel',
                label: 'Carousel',
                url: '/ui/base-ui/carousel',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-dropdown',
                label: 'Dropdowns',
                url: '/ui/base-ui/dropdowns',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-embedvideo',
                label: 'Embed Video',
                url: '/ui/base-ui/embedvideo',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-grid',
                label: 'Grid',
                url: '/ui/base-ui/grid',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-listgroups',
                label: 'List Groups',
                url: '/ui/base-ui/listgroups',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-modals',
                label: 'Modals',
                url: '/ui/base-ui/modals',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-notifications',
                label: 'Notifications',
                url: '/ui/base-ui/notifications',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-offcanvas',
                label: 'Offcanvas',
                url: '/ui/base-ui/offcanvas',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-placeholders',
                label: 'Placeholders',
                url: '/ui/base-ui/placeholders',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-paginations',
                label: 'Paginations',
                url: '/ui/base-ui/paginations',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-popovers',
                label: 'Popovers',
                url: '/ui/base-ui/popovers',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-progress',
                label: 'Progress',
                url: '/ui/base-ui/progress',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-ribbons',
                label: 'Ribbons',
                url: '/ui/base-ui/ribbons',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-spinners',
                label: 'Spinners',
                url: '/ui/base-ui/spinners',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-tabs',
                label: 'Tabs',
                url: '/ui/base-ui/tabs',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-tooltips',
                label: 'Tooltips',
                url: '/ui/base-ui/tooltips',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-typography',
                label: 'Typography',
                url: '/ui/base-ui/typography',
                parentKey: 'base-ui',
            },
        ],
    },
    {
        key: 'extended-ui',
        label: 'Extended UI',
        isTitle: false,
        icon: 'uil-package',
        children: [
            {
                key: 'extended-ui-dragdrop',
                label: 'Drag and Drop',
                url: '/ui/extended/dragdrop',
                parentKey: 'extended-ui',
            },
            {
                key: 'extended-ui-rangesliders',
                label: 'Range Sliders',
                url: '/ui/extended/rangesliders',
                parentKey: 'extended-ui',
            },
            {
                key: 'extended-ui-ratings',
                label: 'Ratings',
                url: '/ui/extended/ratings',
                parentKey: 'extended-ui',
            },
        ],
    },
    {
        key: 'widgets',
        label: 'Widgets',
        isTitle: false,
        icon: 'uil-layer-group',
        url: '/ui/widgets',
    },
    {
        key: 'icons',
        label: 'Icons',
        isTitle: false,
        icon: 'uil-streering',
        children: [
            {
                key: 'icon-dripicons',
                label: 'Dripicons',
                url: '/ui/icons/dripicons',
                parentKey: 'icons',
            },
            {
                key: 'icon-mdiicons',
                label: 'Material Design',
                url: '/ui/icons/mdi',
                parentKey: 'icons',
            },
            {
                key: 'icon-unicons',
                label: 'Unicons',
                url: '/ui/icons/unicons',
                parentKey: 'icons',
            },
        ],
    },
    {
        key: 'forms',
        label: 'Forms',
        isTitle: false,
        icon: 'uil-document-layout-center',
        children: [
            {
                key: 'form-basic',
                label: 'Basic Elements',
                url: '/ui/forms/basic',
                parentKey: 'forms',
            },
            {
                key: 'form-advanced',
                label: 'Form Advanced',
                url: '/ui/forms/advanced',
                parentKey: 'forms',
            },
            {
                key: 'form-validation',
                label: 'Validation',
                url: '/ui/forms/validation',
                parentKey: 'forms',
            },
            {
                key: 'form-wizard',
                label: 'Wizard',
                url: '/ui/forms/wizard',
                parentKey: 'forms',
            },
            {
                key: 'form-upload',
                label: 'File Upload',
                url: '/ui/forms/upload',
                parentKey: 'forms',
            },
            {
                key: 'form-editors',
                label: 'Editors',
                url: '/ui/forms/editors',
                parentKey: 'forms',
            },
        ],
    },
    {
        key: 'charts',
        label: 'Charts',
        isTitle: false,
        icon: 'uil-chart',
        children: [
            {
                key: 'chart-apex',
                label: 'Apex Charts',
                url: '/ui/charts/apex',
                parentKey: 'charts',
            },
            {
                key: 'chart-chartjs',
                label: 'Chartjs',
                url: '/ui/charts/chartjs',
                parentKey: 'charts',
            },
        ],
    },
    {
        key: 'tables',
        label: 'Tables',
        isTitle: false,
        icon: 'uil-table',
        children: [
            {
                key: 'table-basic',
                label: 'Basic Tables',
                url: '/ui/tables/basic',
                parentKey: 'tables',
            },
            {
                key: 'table-advanced',
                label: 'Advanced Tables',
                url: '/ui/tables/advanced',
                parentKey: 'tables',
            },
        ],
    },
    {
        key: 'maps',
        label: 'Maps',
        isTitle: false,
        icon: 'uil-location-point',
        children: [
            {
                key: 'maps-googlemaps',
                label: 'Google Maps',
                url: '/ui/maps/googlemaps',
                parentKey: 'maps',
            },
            {
                key: 'maps-vectormaps',
                label: 'Vector Maps',
                url: '/ui/maps/vectormaps',
                parentKey: 'maps',
            },
        ],
    },
];

export { MENU_ITEMS };
