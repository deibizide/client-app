import axios from '@src/utils/axios';

const BASE_URL = process.env.VUE_APP_BASE_URL;
const PAYMENT_INTENT_URL = `${BASE_URL}/stripe/payment-intents`;

const HEADERS = {
    'Content-Type': 'application/json',
};

const initialState = {
    amount: null,
    clientSecret: null,
    metadata: {},
};
export const state = JSON.parse(JSON.stringify(initialState));

export const getters = {
    amount: state => state.amount,
    clientSecret: state => state.clientSecret,
};
export const mutations = {
    SET_AMOUNT(state, amount) {
        state.amount = amount;
    },
    SET_CLIENT_SECRET(state, secret) {
        state.clientSecret = secret;
    },
};
export const actions = {
    async CREATE_PAYMENT_INTENT({ commit }, { amount, metadata }) {
        try {
            const response = await axios.post(
                PAYMENT_INTENT_URL,
                {
                    amount: amount * 100,
                    metadata,
                },
                HEADERS
            );

            commit('SET_CLIENT_SECRET', response.data.client_secret);
            commit('SET_AMOUNT', amount);
        } catch (error) {
            // console.log(error);
            commit('SET_CLIENT_SECRET', null);
            throw new Error('There has been a connection error.');
        }
    },
};
