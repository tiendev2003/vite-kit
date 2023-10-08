<script>
 
import { ref } from 'vue';
const first = ref(0);
const selectedCity = ref();
const category = ref([
    { name: 'ALL', code: 'all' },
    { name: 'Web design', code: 'webdesign' },
    { name: 'Applications', code: 'applicatin' },
    { name: 'Web development', code: 'webdevelopment' }
]);
export default {
    data() {
        return {
            first,
            isGird: true,
            selectedCity,
            category,
            filters: ['All', 'Web design', 'Applications', 'Web development'],
            activeFilter: 'All',
            projects: [
                { id: 1, category: 'Web design', image: 'project-1.jpg' },
                { id: 2, category: 'Applications', image: 'project-2.png' },
                { id: 3, category: 'Applications', image: 'project-3.jpg' },
                { id: 4, category: 'Web development', image: 'project-4.png' }
                // Thêm các dự án khác vào đây
            ]
        };
    },
    computed: {
        listStyle() {
            return this.isGird ? 'grid-template-columns:  repeat(4, 1fr);' : 'grid-template-columns:  repeat(1, 1fr);';
        },
        filteredProjects() {
            if (this.activeFilter === 'All') {
                return this.projects;
            } else {
                return this.projects.filter((project) => project.category === this.activeFilter);
            }
        },
        iconClass() {
            return this.isGird ? 'pi pi-table' : 'pi pi-list';
        }
    },
    methods: {
        toggleGrid() {
            console.log('toggleGrid');
            this.isGird = !this.isGird;
        },
        setActiveFilter(filter) {
            this.activeFilter = filter;
        }
    }
};
</script>

<template>
    <section>
        <div class="product" id="product">
            <div class="product-header">
                <h1>Product of Member</h1>
                <div @click="toggleGrid()" style="cursor: pointer; margin: 10px; width: 25px; height: 25px; display: flex; align-items: center; justify-content: center">
                    <i :class="iconClass"></i>
                </div>
            </div>
            <ul class="filter-list">
                <li class="filter-item" v-for="(filter, index) in filters" :key="index" style="cursor: pointer">
                    <button class="top-btn" :class="{ active: activeFilter === filter }" @click="setActiveFilter(filter)" style="cursor: pointer">
                        {{ filter }}
                    </button>
                </li>
            </ul>
            <div class="select-active">
                <Dropdown v-model="selectedCity" :options="category" optionLabel="name" placeholder="Chọn danh mục" class="w-full md:w-14rem" />
            </div>
            <div class="product-main">
                <div v-for="project in filteredProjects" :key="project.id" class="product-item" :data-category="project.category">
                    <router-link to="/">
                        <div class="product-img">
                            <div class="project-item-icon-box">
                                <i class="pi pi-eye" style="color: aliceblue"></i>
                            </div>

                            <img :src="`./src/assets/project/${project.image}`" alt="" loading="lazy" />
                        </div>
                        <h3 class="project-title">Brawlhalla</h3>

                        <p class="project-category">Applications</p>
                    </router-link>
                </div>
            </div>
            <div class="pagination">
                <vue-awesome-paginate :total-items="4" :items-per-page="2" :max-pages-shown="2" v-model="projects">
                    <template #prev-button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </template>
                    <template #next-button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </template>
                </vue-awesome-paginate>
            </div>
        </div>
    </section>
</template>
<style lang="css" scoped>
:root {
    --box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    --light-color: #666;
    --yellow: #f9d806;
}
section {
    padding: 100px 10%;
}
.product-main {
    display: block;
}

.product {
    width: 100%;
    max-width: 1200px;
    height: auto;
}
.product-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.select-active {
    display: none;
}

.product .product-main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
}
.product .product-main .product-item {
    padding: 20px;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    border: var(--border);
    animation: fadeIn 0.5s ease;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.product-item > a:hover .product-img::before {
    background: hsla(0, 0%, 0%, 0.5);
}

.project-item-icon-box {
    --scale: 0.8;

    background: var(--light-color);
    color: var(--yellow);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(var(--scale));
    font-size: 20px;
    padding: 18px;
    border-radius: 12px;
    opacity: 0;
    z-index: 1;
    transition: 0.25s ease;
}
.product-item > a:hover .project-item-icon-box {
    --scale: 1;
    opacity: 1;
}

.project-item-icon-box i {
    --ionicon-stroke-width: 50px;
}
.product-img {
    position: relative;
    width: 100%;
    height: 200px;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 15px;
}

.product-img::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 1;
    transition: var(--transition-1);
}
.product .product-main .product-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    overflow: hidden;
    transition: 0.25s ease;
}
.product-item > a:hover img {
    transform: scale(1.1);
}

.product .product-main .product-item .product-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    align-content: center;

    text-align: center;
}
.product .product-main .product-item .product-detail h4 {
    text-align: center;
    align-content: center;
}

.filter-list {
    list-style: none;
    display: flex;
    gap: 10px;
    justify-content: start;
    align-items: center;
}
.filter-list .filter-item {
    margin: 0 10px 0 0;
    border-radius: 20px;
}
.filter-list .filter-item .top-btn.active {
    background: #0a7ecc;
}

@media (max-width: 1200px) {
    .product .product-main {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
}
@media (max-width: 970px) {
    .product .product-main {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
}
@media (max-width: 765px) {
    .select-active {
        display: block;
    }
    .filter-list {
        display: none;
    }
    .product .product-main {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 0.8rem;
    }
}
/* product for member  */
</style>
