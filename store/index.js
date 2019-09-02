
export const actions = {
    nuxtServerInit({ commit }, { req }) {
        if (req.session.user) {
            commit("user/set", req.session.user);
        }
    }
}
