<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/admin/' }]
    },
    {
        label: 'UI Components',
        items: [
            { label: 'Cập nhật thông tin', icon: 'pi pi-fw pi-id-card', to: '/admin/uikit/formlayout' },

            { label: 'Danh sách sinh viên', icon: 'pi pi-fw pi-table', to: '/admin/uikit/table' },

            { label: 'Media', icon: 'pi pi-fw pi-image', to: '/admin/uikit/media' },

            { label: 'File', icon: 'pi pi-fw pi-file', to: '/admin/uikit/file' },

            { label: 'Thời khoá biểu', icon: 'pi pi-fw pi-calendar', to: '/admin/uikit/calendar' },
            {
                label: 'Project',
                icon: 'pi pi-fw pi-database',
                items: [
                    {
                        label: 'Cập nhật',
                        icon: 'pi pi-fw pi-pencil',
                        to: '/admin/uikit/project'
                    },
                    {
                        label: 'Xem',
                        icon: 'pi pi-fw pi-list',
                        to: '/admin/uikit/list'
                    }
                ]
            }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
