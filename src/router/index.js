import Vue from "vue";
import VueRouter from "vue-router";
import UserListPage from "../pages/UserListPage.vue";
import UserDetailsPage from "../pages/UserDetails.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: UserListPage },
    { path: '/:username', component: UserDetailsPage }
]

const router = new VueRouter({
    routes
})

export default router;