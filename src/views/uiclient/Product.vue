<script>
export default {
    data() {
        return {
            isGird: true
        };
    },
    computed: {
        listStyle() {
            return this.isGird ? 'grid-template-columns:  repeat(4, 1fr);' : 'grid-template-columns:  repeat(1, 1fr);';
        }
    },
    methods: {
        toggleGrid() {
            console.log('toggleGrid');
            this.isGird = !this.isGird;
        }
    }
};
</script>

<template>
    <section>
        <div class="product" id="product">
            <div class="product-header">
                <h1>Product of Member</h1>
                <div @click="toggleGrid()" style="cursor: pointer; margin: 10px; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center">
                    <box-icon type="solid" name="grid-alt"></box-icon>
                </div>
            </div>
            <div class="product-main">
                <div v-for="index in 4" :key="index" class="product-item">
                    <img src="@/assets/project/project-1.jpg" alt="" />

                    <div class="product-detail"></div>
                </div>
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

.product .product-main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
}
.product .product-main .product-item {
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    border: var(--border);
}

.product .product-main .product-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 20px;
    overflow: hidden;
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
    .product .product-main {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 0.8rem;
    }
}
/* product for member  */
</style>
