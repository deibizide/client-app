import Home from '@components/Home';
// import VisaCheckout from '@components/donate/VisaCheckoutPayment';
/* eslint-disable prettier/prettier */
export default [
    // INDEX

    {
        path: '/',
        name: 'home',
        meta: {
            layout: 'home',
        },
        component: Home,
    },

    // DONATE

    {
        path: '/donate',
        name: 'donate',
        meta: {
            title: 'donate',
            layout: 'generic',
        },
        component: () => lazyLoadView(/* webpackChunkName: "donation" */ import('@components/Donate')),
    },
    // CHART REPORT
    {
        path: '/donate/chart-report',
        name: 'donate-chart-report',
        meta: {
            title: 'report',
            layout: 'generic',
        },
        props: true,
        component: () =>
            lazyLoadView(/* webpackChunkName: "donation" */ import('@components/donate/chart/ChartReport')),
    },
    // WILL DONATION
    {
        path: '/donate/via-will',
        name: 'donate-via-will',
        meta: {
            title: 'donate',
            layout: 'generic',
        },
        component: () => lazyLoadView(/* webpackChunkName: "donation" */ import('@components/donate/methods/ViaWill')),
    },
    // CHEQUE DONATION
    {
        path: '/donate/via-cheque',
        name: 'donate-via-cheque',
        meta: {
            title: 'donate',
            layout: 'generic',
        },
        component: () =>
            lazyLoadView(/* webpackChunkName: "donation" */ import('@components/donate/methods/ViaCheque')),
    },
    // LIVING TRUST DONATION
    {
        path: '/donate/via-living-trust',
        name: 'donate-via-living-trust',
        meta: {
            title: 'donate',
            layout: 'generic',
        },
        component: () =>
            lazyLoadView(/* webpackChunkName: "donation" */ import('@components/donate/methods/ViaLivingTrust')),
    },
    // PAYMENT DONATION
    {
        path: '/donate/via-payment',
        name: 'donate-via-payment',
        meta: {
            title: 'donate',
            layout: 'generic',
            donationSessionCheck: true,
        },
        props: true,
        component: () =>
            lazyLoadView(/* webpackChunkName: "donation" */ import('@components/donate/methods/ViaPayment')),
    },
    {
        path: '/donate/payment/credit-card',
        name: 'donate-credit-card',
        meta: {
            title: 'donate',
            layout: 'generic',
            donationSessionCheck: true,
        },
        props: true,
        component: () =>
            lazyLoadView(/* webpackChunkName: "donation" */ import('@components/donate/methods/CreditCardPayment')),
    },
    // {
    //     path: '/donate/payment/visa-checkout',
    //     name: 'donate-visa-checkout',
    //     meta: {
    //         title: 'donate',
    //         layout: 'generic',
    //         donationSessionCheck: true,
    //     },
    //     props: true,
    //     component: VisaCheckout,
    // },
    {
        path: '/donate/payment/thank-you',
        name: 'donate-thank-you',
        meta: {
            title: 'donate',
            layout: 'generic',
            donationSessionCheck: true,
        },
        component: () => lazyLoadView(/* webpackChunkName: "donation" */ import('@components/donate/ThankYou')),
    },
    // BLOG
    {
        path: '/blog/article/:slug',
        name: 'blog-article',
        meta: {
            title: 'blog',
            layout: 'main',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "blog" */ '@components/blog/Article/Article')),
    },
    {
        path: '/blog/:tag?',
        name: 'blog',
        meta: {
            title: 'blog',
            layout: 'generic',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "blog" */ '@components/Blog')),
    },

    // COMMUNITIES
    {
        path: '/communities',
        name: 'communities',
        meta: {
            title: 'communities',
            layout: 'generic',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "communities" */ '@components/static/Communities')),
    },
    // {
    //     path: '/communities/admin',
    //     name: 'communities-dashboard',
    //     meta: {
    //         layout: 'user',
    //     },
    //     component: () => lazyLoadView(import(/* webpackChunkName: "communities" */ '@components/community/admin')),
    // },

    // BRAIN FACTS
    {
        path: '/brain-facts',
        name: 'brainFacts',
        meta: {
            title: 'brain facts',
            layout: 'generic',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "brain-facts" */ '@components/static/BrainFacts')),
    },
    {
        path: '/brain-facts/sources',
        name: 'brainFactsSources',
        meta: {
            title: 'brain facts | sources',
            layout: 'generic',
        },
        component: () =>
            lazyLoadView(import(/* webpackChunkName: "brain-facts" */ '@components/static/BrainFactsSources')),
    },

    // ABOUT
    {
        path: '/about',
        name: 'about',
        meta: {
            title: 'about',
            layout: 'generic',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "about" */ '@components/static/About')),
    },

    // RESEARCH
    {
        path: '/research',
        name: 'research',
        meta: {
            title: 'research',
            layout: 'generic',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "research" */ '@components/static/Research')),
    },

    // LEGAL
    {
        name: 'privacy',
        path: '/legal/privacy',
        meta: {
            title: 'privacy',
            layout: 'generic',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "legal" */ '@components/legal/Privacy')),
    },
    {
        name: 'cookies',
        path: '/legal/cookies',
        meta: {
            title: 'cookies',
            layout: 'generic',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "legal" */ '@components/legal/Cookies')),
    },
    {
        name: 'imprint',
        path: '/legal/imprint',
        meta: {
            title: 'imprint',
            layout: 'generic',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "legal" */ '@components/legal/Imprint')),
    },

    // AUTH
    {
        path: '/auth/login',
        name: 'login',
        meta: {
            auth: true,
            layout: 'main',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "auth" */ '@components/auth/Login')),
    },
    {
        path: '/auth/logout',
        name: 'logout',
        meta: {
            auth: true,
            layout: 'main',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "auth" */ '@components/auth/Logout')),
    },
    {
        path: '/auth/register',
        name: 'register',
        meta: {
            auth: true,
            layout: 'main',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "auth" */ '@components/auth/RegisterCommunity')),
    },
    {
        path: '/auth/change-password',
        name: 'change-password',
        meta: {
            auth: true,
            layout: 'main',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "auth" */ '@components/auth/ChangePassword')),
    },
    {
        path: '/login',
        redirect: '/auth/login',
    },

    // DEFAULT AFTER LOGIN WELCOME
    {
        path: '/welcome',
        name: 'login-welcome',
        meta: {
            layout: 'user',
            isAuthRequired: true,
            roles: ['user'],
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "community" */ '@components/auth/Welcome')),
    },
    // COMMUNITY INTERFACE
    {
        path: '/community',
        name: 'community-dashboard',
        meta: {
            layout: 'user',
            isAuthRequired: true,
            roles: ['admin', 'communityOwner'],
        },
        component: () =>
            lazyLoadView(import(/* webpackChunkName: "community" */ '@components/community/CommunityEditPage')),
    },
    // COMMUNITY EDIT
    {
        path: '/community-edit/:communitySlug',
        name: 'community-edit',
        meta: {
            layout: 'user',
            isAuthRequired: true,
            roles: ['admin', 'communityOwner'],
        },
        component: () =>
            lazyLoadView(import(/* webpackChunkName: "community" */ '@components/community/CommunityEditPage')),
    },

    // ADMIN
    {
        path: '/admin',
        name: 'admin',
        meta: {
            layout: 'user',
            isAuthRequired: true,
            roles: ['admin'],
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "admin" */ '@components/admin/Main')),
    },
    {
        path: '/admin/blog',
        name: 'admin-blog',
        meta: {
            layout: 'user',
            isAuthRequired: true,
            roles: ['admin'],
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "admin" */ '@components/admin/blog/Blog')),
    },
    {
        path: '/admin/blog/add',
        name: 'blog-add',
        meta: {
            layout: 'user',
            isAuthRequired: true,
            roles: ['admin'],
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "admin" */ '@components/admin/blog/BlogForm')),
    },
    {
        path: '/admin/blog/edit/:slug',
        name: 'blog-edit',
        meta: {
            layout: 'user',
            isAuthRequired: true,
            roles: ['admin'],
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "admin" */ '@components/admin/blog/BlogForm')),
    },

    {
        path: '/404',
        name: '404',
        meta: {
            layout: 'main',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "404" */ '@components/404')),
        // Allows props to be passed to the 404 page through route
        // params, such as `resource` to define what wasn't found.
        props: true,
    },
    // COMMUNITIES PUBLIC PAGE
    {
        path: '/:communitySlug',
        name: 'community',
        meta: {
            layout: 'main',
        },
        component: () => lazyLoadView(import(/* webpackChunkName: "404" */ '@components/Community')),
        // Allows props to be passed to the 404 page through route
        // params, such as `resource` to define what wasn't found.
        props: true,
    },

    // Redirect any unmatched routes to the 404 page
    {
        path: '*',
        redirect: '404',
    },
];

// Lazy-loads view components, but with better UX. A loading view
// will be used if the component takes a while to load, falling
// back to a timeout view in case the page fails to load. You can
// use this component to lazy-load a route with:
//
// component: () => lazyLoadView(import('@views/my-view'))
//
// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('@views/my-view')
//
function lazyLoadView(AsyncView) {
    const AsyncHandler = () => ({
        component: AsyncView,
        // A component to use while the component is loading.
        // eslint-disable-next-line
        // loading: require('@views/loading').default,
        // A fallback component in case the timeout is exceeded
        // when loading the component.
        // eslint-disable-next-line
        // error: require('@views/timeout').default,
        // Delay before showing the loading component.
        // Default: 200 (milliseconds).
        delay: 400,
        // Time before giving up trying to load the component.
        // Default: Infinity (milliseconds).
        timeout: 10000,
    });

    return Promise.resolve({
        functional: true,
        render(h, { data, children }) {
            // Transparently pass any props or children
            // to the view component.
            return h(AsyncHandler, data, children);
        },
    });
}
