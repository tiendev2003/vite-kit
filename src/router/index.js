import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import ClientViewer from '@/components/ClientViewer.vue';
import store from '@/store/store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin/',
            component: AppLayout,
            beforeEnter: (to, from, next) => {
                if (store.state.user) {
                    next();
                } else {
                    next('/login');
                }
            },
            children: [
                {
                    path: '/admin/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/admin/information',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/InformationUser.vue')
                },
                {
                    path: '/admin/input',
                    name: 'input',
                    component: () => import('@/views/uikit/Input.vue')
                },

                {
                    path: '/admin/table',
                    name: 'table',
                    component: () => import('@/views/uikit/Table.vue')
                },
                {
                    path: '/admin/list',
                    name: 'list',
                    component: () => import('@/views/uikit/List.vue')
                },

                {
                    path: '/admin/media',
                    name: 'media',
                    component: () => import('@/views/uikit/Media.vue')
                },

                {
                    path: '/admin/file',
                    name: 'file',
                    component: () => import('@/views/uikit/File.vue')
                },
                {
                    path: '/admin/project',
                    name: 'project',
                    component: () => import('@/views/uikit/Project.vue')
                },
                {
                    path: '/admin/calendar',
                    name: 'calendar',
                    component: () => import('@/views/uikit/Calendar.vue')
                }
            ]
        },
        {
            path: '/',
            component: ClientViewer,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('@/views/uiclient/Index.vue')
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('@/views/uiclient/About.vue')
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/views/uiclient/Contact.vue')
                },
                {
                    path: '/product',
                    name: 'product',
                    component: () => import('@/views/uiclient/Product.vue')
                },
                {
                    path: '/blog',
                    name: 'blog',
                    component: () => import('@/views/uiclient/Blog.vue')
                }
            ]
        },

        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue'),
            beforeEnter: (to, from, next) => {
                if (to.path === '/login') {
                    next();
                } else if (store.state.user) {
                    // Người dùng đã đăng nhập, cho phép chuyển hướng đến địa chỉ mới
                    next('/admin/');
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/error',
            name: 'error',
            component: () => import('@/views/uikit/Error.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('@/views/uikit/NotFound.vue')
        },
        {
            path: '/auth/verifyEmail/email=:email/token=:token',
            name: 'verifyEmail',
            component: () => import('@/views/uikit/VerifylEmail.vue'),
            props: true
        },
        {
            path: '/login/success',

            name: 'login-success',
            component: () => import('@/views/LoginSuccess.vue'),
            props: true
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;
