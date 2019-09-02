export default function ({ route, store, redirect }) {
    // 如果用户不存在，跳到登录页面
    if (!store.state.user.user)
        redirect('/user/login?redirect=' + route.path);
}
