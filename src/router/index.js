import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import ClientViewer from '@/components/ClientViewer.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin/',
            component: AppLayout,
            children: [
                {
                    path: '/admin/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/admin/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/admin/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/Input.vue')
                },

                {
                    path: '/admin/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/Table.vue')
                },
                {
                    path: '/admin/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/List.vue')
                },

                {
                    path: '/admin/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/Media.vue')
                },

                {
                    path: '/admin/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/File.vue')
                },
                {
                    path: '/admin/uikit/project',
                    name: 'project',
                    component: () => import('@/views/uikit/Project.vue')
                },
                {
                    path: '/admin/uikit/calendar',
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
