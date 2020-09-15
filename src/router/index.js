import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@src/store';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
    base: '/client-app/',
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                selector: to.hash,
            };
        } else {
            return { x: 0, y: 0 };
        }
    },
});

const hasRequiredRole = routeRoles => {
    let hasPermissions = false;
    const userRoles = store.state.SESSION.roles;

    // if the user has the required role for the route
    routeRoles.forEach(role => {
        userRoles.forEach(userRole => {
            if (userRole === role) {
                hasPermissions = true;
            }
        });
    });

    return hasPermissions;
};

const redirectUserPerRole = () => {
    const userRoles = store.state.SESSION.roles;
    if (userRoles.includes('admin')) {
        return router.push({ name: 'admin' });
    }
    if (userRoles.includes('communityOwner')) {
        return router.push({ name: 'community-dashboard' });
    }
    return router.push({ name: 'login-welcome' });
};

// Before each route evaluates
router.beforeEach(async (routeTo, routeFrom, next) => {
    // get the account on initial load
    if (!routeFrom.name) {
        await store.dispatch('SESSION/GET_ACCOUNT');
    }

    // if the route requires auth, check for loggedIn state
    if (routeTo.meta.isAuthRequired) {
        if (!store.state.SESSION.isLoggedIn) {
            return router.push({ name: 'login' });
        }
        if (routeTo.meta.roles.length === 0 || hasRequiredRole(routeTo.meta.roles)) {
            return next();
        } else {
            redirectUserPerRole();
        }
    }

    // when donating, we need to ensure we have the amount and
    // the clientSecret from the paymentIntent from Stripe
    if (routeTo.meta.donationSessionCheck && (!store.state.DONATION.amount || !store.state.DONATION.clientSecret)) {
        return router.push({ name: 'donate' });
    }

    next();
});

export default router;
