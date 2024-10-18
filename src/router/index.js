import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
        meta: {
            navbar: true,
        },
    },
    {
        path: "/services",
        name: "Services",
        component: () => import("../views/Services.vue"),
        meta: {
            navbar: true,
        },
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
        meta: {
            navbar: true,
        },
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue"),
        meta: {
            navbar: true,
        },
    },
    {
        path: "/blog",
        name: "Blog",
        component: () => import("../views/Blog.vue"),
        meta: {
            navbar: true,
        },
    },
    {
        path: "/book",
        name: "Book",
        component: () => import("../views/Book.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFound.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_PATH),
    routes,
});
export default router;
