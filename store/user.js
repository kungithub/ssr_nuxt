
export const state = () => {
    user: null
};

export const mutations = {
    // 设置登录用户
    set(state, user) {
        state.user = user;
    },
    loginOut(state) {
        state.user = null;
    }
}