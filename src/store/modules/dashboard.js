import axios from '@src/utils/axios';

const BASE_URL = process.env.VUE_APP_BASE_URL;
const USERS_URL = `${BASE_URL}/users`;
const COMMUNITIES_URL = `${BASE_URL}/communities`;

const HEADERS = {
    'Content-Type': 'application/json',
};

const initialState = {
    users: [],
    communities: [],
    communityOwners: [],
};
export const state = JSON.parse(JSON.stringify(initialState));

export const getters = {
    users: state => state.users,
    communities: state => state.communities,
    communityOwners: state => state.communityOwners,
};
export const mutations = {
    SET_USERS(state, data) {
        state.users = data;
    },
    SET_COMMUNITIES(state, data) {
        state.communities = data;
    },
    SET_COMMUNITY_OWNERS(state, data) {
        state.communityOwners = data;
    },
};
export const actions = {
    async GET_USERS({ commit }) {
        try {
            const { data } = await axios.get(USERS_URL);

            const owners = data.filter(user => user.roles.includes('communityOwner'));

            commit('SET_COMMUNITY_OWNERS', owners);
            commit('SET_USERS', data);
        } catch (error) {
            throw new Error(error);
        }
    },
    async GET_COMMUNITIES({ commit }) {
        try {
            const response = await axios.get(COMMUNITIES_URL);
            commit('SET_COMMUNITIES', response.data);
        } catch (error) {
            throw new Error('Could not retrieve data');
        }
    },
    async ADD_COMMUNITY({ dispatch }, { name, slug }) {
        try {
            await axios.post(
                COMMUNITIES_URL,
                {
                    name,
                    slug,
                },
                HEADERS
            );

            dispatch('GET_COMMUNITIES');
        } catch (error) {
            throw 'Could not add a community';
        }
    },
    async ADD_COMMUNITY_OWNER({ dispatch }, { userId, community }) {
        const URL = `${BASE_URL}/users/${userId}/ownership`;

        try {
            await axios.post(
                URL,
                {
                    community,
                },
                HEADERS
            );
        } catch (error) {
            throw 'Could not assign the owner to the community';
        }

        dispatch('GET_USERS');
    },
    async SET_USER_FLAGS({ dispatch }) {
        try {
            // TODO: api call
            // console.log(userId);
        } catch (error) {
            throw 'Could not convert the user';
        }

        dispatch('DASHBOARD/GET_USERS');
    },
};
