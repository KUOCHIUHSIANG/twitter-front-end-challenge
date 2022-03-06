import Vue from "vue";
import VueRouter from "vue-router";
import UserLogin from "../views/UserLogin.vue";
import NotFound from "../views/NotFound.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import UserProfileLayout from "@/layouts/UserProfileLayout.vue";
import store from "./../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/user/home",
  },
  {
    path: "/user",
    redirect: "/user/home",
  },
  {
    path: "/user/login",
    name: "user-login",
    component: UserLogin,
  },
  {
    path: "/user/regist",
    name: "user-regist",
    component: () => import("../views/UserRegist.vue"),
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: () => import("../views/AdminLogin.vue"),
  },

  {
    path: "/admin",
    redirect: "/admin/tweets",
  },
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "user/home",
        name: "user-home",
        component: () => import("../views/UserHome.vue"),
        meta: { isAdminPage: false },
      },
      {
        path: "user/setting",
        name: "user-setting",
        component: () => import("../views/UserSetting.vue"),
        meta: { isAdminPage: false },
      },
      {
        path: "user/notification",
        name: "user-notification",
        component: () => import("../views/UserNotification.vue"),
        meta: { isAdminPage: false },
      },
      {
        path: "user/public/chat",
        name: "user-public-chat",
        component: () => import("../views/UserPublicChat.vue"),
        meta: { isAdminPage: false},
      },
      {
        path: "user/private/message",
        name: "user-private-message",
        component: () => import("../views/UserPrivateMessage.vue"),
        meta: { isAdminPage: false},
      },
      {
        path: "user/tweets/:tweet_id",
        name: "user-tweet",
        component: () => import("../views/UserTweet.vue"),
        meta: { isAdminPage: false },
      },
      {
        path: "user/:user_id/",
        component: UserProfileLayout,
        children: [
          {
            path: "",
            name: "user-id",
            component: () => import("../views/UserAllTweets.vue"),
            meta: { needChangeViewUser: true, isAdminPage: false },
          },
          {
            path: "tweets",
            name: "user-all-tweets",
            component: () => import("../views/UserAllTweets.vue"),
            meta: { needChangeViewUser: true, isAdminPage: false },
          },
          {
            path: "replies",
            name: "user-all-replies",
            component: () => import("../views/UserAllReplies.vue"),
            meta: { needChangeViewUser: true, isAdminPage: false },
          },
          {
            path: "like",
            name: "user-all-like",
            component: () => import("../views/UserAllLike.vue"),
            meta: { needChangeViewUser: true, isAdminPage: false },
          },
        ],
      },
      {
        path: "user/:user_id/followers",
        name: "user-followers",
        component: () => import("../views/UserFollowers.vue"),
        meta: { needChangeViewUser: true, isAdminPage: false },
      },
      {
        path: "user/:user_id/followings",
        name: "user-followings",
        component: () => import("../views/UserFollowings.vue"),
        meta: { needChangeViewUser: true, isAdminPage: false },
      },
      {
        path: "user/:user_id",
        redirect: "/user/:user_id/tweets",
      },
      {
        path: "admin/tweets",
        name: "admin-tweets",
        exact: true,
        component: () => import("../views/AdminAllTweets.vue"),
        meta: { isAdminPage: true },
      },
      {
        path: "admin/users",
        name: "admin-users",
        component: () => import("../views/AdminAllUsers.vue"),
        meta: { needChangeViewUser: true, isAdminPage: true },
      },
    ],
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  linkExactActiveClass: "active",
  routes,
});

router.beforeEach(async (to, from, next) => {
  const tokenInLocalStorage = localStorage.getItem("token");
  const tokenInStore = store.state.token;
  const isAdmin = store.state.isAdmin;
  let isAuthenticated = store.state.isAuthenticated;

  store.commit("updatePathName", to.name);

  const pathWithoutAuthentication = [
    "user-login",
    "user-regist",
    "admin-login",
  ];

  if (
    tokenInLocalStorage !== tokenInStore &&
    !pathWithoutAuthentication.includes(to.name)
  ) {
    isAuthenticated = await store.dispatch("fetchCurrentUser");
  }

  if (!isAuthenticated && !pathWithoutAuthentication.includes(to.name)) {
    next("/user/login");
    return;
  }

  if (isAuthenticated && pathWithoutAuthentication.includes(to.name)) {
    next("/user/home");
    return;
  }

  if (to.meta.needChangeViewUser) {
    store.dispatch("fetehViewUser", to.params.user_id);
  }

  if (to.meta.isAdminPage && !isAdmin) {
    next("/404");
  }

  next();
});

export default router;
