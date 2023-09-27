<script>
export default {};
</script>

<template>
    <section class="about-section">
        <div class="header-about">
            <h1>About Us</h1>
            <p>We're family from VKU University at Da Nang city</p>
        </div>
        <div class="main-about">
            <div class="about-img">
                <img src="@/assets/main.jpg" alt="" />
            </div>
            <div class="about-content">
                <h2>Class K-IT from VKU</h2>
                <p>We're family from VKU University at Da Nang city. We're family from VKU University at Da Nang city.</p>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
.about-section {
    background: url(@/assets/background.jpg);
}
.header-about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header-about h1 {
    font-size: 50px;
    font-weight: 700;
    color: #000;
    margin-bottom: 20px;
    text-decoration: underline;
}
.main-about {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;
}
.main-about .about-img {
    width: 500px;
    height: 500px;
}
.main-about .about-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
@media (max-width: 756px) {
    .main-about .about-img {
        width: 400px;
        height: 400px;
    }
    .main-about {
        flex-direction: column;
    }
    .main-about .about-content {
        margin-top: 20px;
        margin-left: 20px;
    }
}
</style>
