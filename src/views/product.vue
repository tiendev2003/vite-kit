<template>
    <section>
        <div class="product">
            <div class="product-header">
                <h1>Product of Member</h1>
                <div @click="toggleGrid()"
                    style="cursor: pointer; margin: 10px; width: 50px;height: 50px;  display: flex; align-items: center; justify-content: center;">

                    <box-icon type='solid' name='grid-alt'></box-icon>
                </div>
            </div>
            <article class="portfolio" data-page="portfolio">
                <div class="projects">

                    <ul class="filter-list">

                        <li class="filter-item">
                            <button class="active" data-filter-btn>All</button>
                        </li>

                        <li class="filter-item">
                            <button data-filter-btn>Web design</button>
                        </li>

                        <li class="filter-item">
                            <button data-filter-btn>Applications</button>
                        </li>

                        <li class="filter-item">
                            <button data-filter-btn>Web development</button>
                        </li>

                    </ul>

                    <div class="filter-select-box">

                        <button class="filter-select" data-select>

                            <div class="select-value" data-selecct-value>Select category</div>

                            <div class="select-icon">
                                <ion-icon name="chevron-down"></ion-icon>
                            </div>

                        </button>

                        <ul class="select-list">

                            <li class="select-item">
                                <button data-select-item>All</button>
                            </li>

                            <li class="select-item">
                                <button data-select-item>Web design</button>
                            </li>

                            <li class="select-item">
                                <button data-select-item>Applications</button>
                            </li>

                            <li class="select-item">
                                <button data-select-item>Web development</button>
                            </li>

                        </ul>

                    </div>



                    <ul class="project-list" :style="listStyle">

                        <li class="project-item  active">
                            <a href="#">

                                <figure class="project-img">
                                    <div class="project-item-icon-box">
                                        <box-icon type='solid' name='binoculars'></box-icon>
                                    </div>

                                    <img src="../assets/project/project-1.jpg" alt="finance" loading="lazy">
                                </figure>

                                <h3 class="project-title">Finance</h3>

                                <p class="project-category">Web development</p>

                            </a>
                        </li>

                        <li class="project-item  active">
                            <a href="#">

                                <figure class="project-img">
                                    <div class="project-item-icon-box">
                                        <box-icon type='solid' name='binoculars'></box-icon>
                                    </div>

                                    <img src="../assets/project/project-2.png" alt="orizon" loading="lazy">
                                </figure>

                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <h3 class="project-title">Tran Cong Tien</h3>
                                    <h3 class="project-title">20-12-2003</h3>
                                </div>


                                <p class="project-category">Web development</p>

                            </a>
                        </li>

                        <li class="project-item  active">
                            <a href="#">

                                <figure class="project-img">
                                    <div class="project-item-icon-box">
                                        <box-icon type='solid' name='binoculars'></box-icon>
                                    </div>

                                    <img src="../assets/project/project-3.jpg" alt="fundo" loading="lazy">
                                </figure>

                                <h3 class="project-title">Fundo</h3>

                                <p class="project-category">Web design</p>

                            </a>
                        </li>

                        <li class="project-item  active">
                            <a href="#">

                                <figure class="project-img">
                                    <div class="project-item-icon-box">
                                        <box-icon type='solid' name='binoculars'></box-icon>

                                    </div>

                                    <img src="../assets/project/project-4.png" alt="brawlhalla" loading="lazy">
                                </figure>

                                <h3 class="project-title">Brawlhalla</h3>

                                <p class="project-category">Applications</p>

                            </a>
                        </li>



                    </ul>

                </div>

            </article>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isGird: true
        }
    }
    ,
    computed: {
        listStyle() {
            return this.isGird ? 'grid-template-columns: repeat(4, minmax(0, 1fr));' : 'grid-template-columns: repeat(1, minmax(0, 1fr));'
        }
    },
    methods: {
        toggleGrid() {
            console.log('toggleGrid')
            this.isGird = !this.isGird
        }
    }
}
</script>
<style lang="css" scoped>
.product-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>