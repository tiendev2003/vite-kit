<script setup>
import { ref } from "vue";

import AppMenuItem from "./AppMenuItem.vue";

const model = ref([
  {
    label: "Home",
    items: [
      {
        label: "Dashboard",
        icon: "pi pi-fw pi-home",

        to: "/admin/",
      },
    ],
  },
  {
    label: "UI Components",
    items: [
      {
        label: "Cập nhật thông tin",
        icon: "pi pi-fw pi-id-card",
        to: "/admin/information",
      },

      {
        label: "Danh sách sinh viên",
        icon: "pi pi-fw pi-table",
        to: "/admin/table",
      },

      { label: "Media", icon: "pi pi-fw pi-image", to: "/admin/media" },

      { label: "File", icon: "pi pi-fw pi-file", to: "/admin/file" },

      {
        label: "Thời khoá biểu",
        icon: "pi pi-fw pi-calendar",
        to: "/admin/calendar",
      },
      {
        label: "Project",
        icon: "pi pi-fw pi-database",
        items: [
          {
            label: "Cập nhật",
            icon: "pi pi-fw pi-pencil",
            to: "/admin/project",
          },
          {
            label: "Xem",
            icon: "pi pi-fw pi-list",
            to: "/admin/list",
          },
        ],
      },
    ],
  },
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item
        v-if="!item.separator"
        :item="item"
        :index="i"
      ></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
