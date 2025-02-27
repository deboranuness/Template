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
    
];

export { MENU_ITEMS };
