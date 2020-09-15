import axios from '@src/utils/axios';

const BASE_URL = process.env.VUE_APP_BASE_URL;
const COMMUNITY_URL = `${BASE_URL}/communities`;

const initialState = {
    community: {},
};
export const state = JSON.parse(JSON.stringify(initialState));

export const getters = {
    community: state => state.community,
};
export const mutations = {
    SET_COMMUNITY(state, data) {
        state.community = data;
    },
};
export const actions = {
    async GET_COMMUNITY({ commit }, slug) {
        try {
            const response = await axios.get(`${COMMUNITY_URL}/${slug}`);
            commit('SET_COMMUNITY', response.data);
        } catch (error) {
            throw new Error('Could not retrieve data');
        }
    },
};
