import axios from '@src/utils/axios';

const BASE_URL = process.env.VUE_APP_BASE_URL;

const LOGIN_URL = `${BASE_URL}/auth/login`;
const REGISTER_URL = `${BASE_URL}/users`;
const LOGOUT_URL = `${BASE_URL}/auth/session`;
const USERINFO_URL = `${BASE_URL}/auth/userinfo`;

const HEADERS = {
    'Content-Type': 'application/json',
};

const initialState = {
    firstName: null,
    lastName: null,
    email: null,
    roles: [],
    isLoggedIn: null,
    showPopup: true,
};
export const state = JSON.parse(JSON.stringify(initialState));

export const getters = {
    isLoggedIn: state => state.isLoggedIn,
    accountRoles: state => state.roles,
    firstName: state => state.firstName,
    lastName: state => state.lastName,
    showPopup: state => state.showPopup,
};
export const mutations = {
    SET_ACCOUNT(state, account) {
        state.firstName = account.firstName;
        state.lastName = account.lastName;
        state.email = account.email;
        state.roles = account.roles;
    },
    SET_LOGGED_IN(state, isLoggedIn) {
        state.isLoggedIn = isLoggedIn;
    },
    SET_STATE(state) {
        state.firstName = null;
        state.lastName = null;
        state.email = null;
        state.roles = [];
        state.isLoggedIn = null;
    },
    SET_POPUP_STATE(state, value) {
        state.showPopup = value;
    },
};
export const actions = {
    async GET_ACCOUNT({ commit }) {
        try {
            const response = await axios.get(USERINFO_URL);

            commit('SET_ACCOUNT', response.data);
            commit('SET_LOGGED_IN', true);
        } catch (error) {
            commit('SET_LOGGED_IN', false);
        }
    },

    async LOGIN({ commit }, { email, password }) {
        try {
            const response = await axios.post(
                LOGIN_URL,
                {
                    email,
                    password,
                },
                HEADERS
            );

            if (response.status === 200) {
                commit('SET_LOGGED_IN', true);
                commit('SET_ACCOUNT', response.data);
            }
        } catch (error) {
            commit('SET_LOGGED_IN', false);
            throw new Error(error.response.data.error.description);
        }
    },

    async REGISTER({ dispatch }, { firstName, lastName, email, password }) {
        try {
            const response = await axios.post(
                REGISTER_URL,
                {
                    firstName,
                    lastName,
                    email,
                    password,
                },
                HEADERS
            );

            if (response.status === 201) {
                try {
                    await dispatch('LOGIN', { email, password });
                } catch (error) {
                    throw new Error(error.response.data.error.description);
                }
            }
        } catch (error) {
            if (error.response.status === 500) {
                throw new Error('There has been a connectivity issue');
            }
            if (error.response.status === 409) {
                throw new Error('This email is already in use');
            }
        }
    },

    async LOGOUT({ dispatch, commit }) {
        try {
            await axios.delete(LOGOUT_URL, {}, HEADERS);
            commit('SET_STATE');
            dispatch('GET_ACCOUNT');
        } catch (error) {
            throw new Error('Could not logout');
        }
    },

    SET_POPUP_STATE({ commit }, value) {
        commit('SET_POPUP_STATE', value);
    },
};
