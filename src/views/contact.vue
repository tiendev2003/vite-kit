<template>
    <section class="contact-main">
        <article class="contact" data-page="contact">


            <div class="mapbox" data-mapbox>
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d806.3648231296336!2d108.25323871374837!3d15.974993403258772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108997dc971f%3A0x1295cb3d313469c9!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiB2w6AgVHJ1eeG7gW4gdGjDtG5nIFZp4buHdCAtIEjDoG4!5e0!3m2!1svi!2s!4v1681137917335!5m2!1svi!2s"
                        width="400" height="300" loading="lazy"></iframe>
                </figure>
            </div>

            <div class="contact-form">
                <h3 class="h3 form-title">Contact Form</h3>

                <form action="#" method="post" class="form" data-form>
                    <div class="input-wrapper">
                        <input type="text" name="fullname" class="form-input" placeholder="Full name" required
                            data-form-input />

                        <input type="email" name="email" class="form-input" placeholder="Email address" required
                            data-form-input />
                    </div>

                    <textarea name="message" class="form-input" placeholder="Your Message" required
                        data-form-input></textarea>

                    <button class="form-btn  send-mail " type="submit" data-form-btn name="send" id="send-mail">
                        <span style="color: black; ">Send Message</span>
                        <box-icon name='navigation'></box-icon>
                    </button>
                </form>
            </div>
        </article>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.contact-main {

    background-image: url(./src/assets/background.jpg);
}

.contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

input,
textarea {
    display: block;
    width: 100%;
    background: none;
    font: inherit;
}

.mapbox {
    margin-top: 30px;
    position: relative;
    height: 450px;
    width: 50%;
    border-radius: 16px;
    margin-bottom: 30px;
    border: 1px solid #333;
    overflow: hidden;
}

.mapbox figure {
    height: 100%;
}

.mapbox iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(1) invert(1);
}

.contact-form {
    margin-bottom: 10px;
    width: 40%;
}

.form-title {
    margin-bottom: 20px;
}

.input-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 25px;
}

.form-input {
    color: black;
    font-size: 20px;
    font-weight: 400;
    padding: 13px 20px;
    border: 1px solid #333;
    border-radius: 14px;
    outline: none;
}

.form-input::placeholder {
    font-weight: 500;
}

.form-input:focus {
    border-color: cadetblue;
    background: white;
}

textarea.form-input {
    min-height: 100px;
    height: 120px;
    max-height: 200px;
    resize: vertical;
    margin-bottom: 25px;

}

textarea.form-input::-webkit-resizer {
    display: none;
}

.form-input:focus:invalid {
    border-color: rgb(246, 122, 122);
}

.form-btn {
    position: relative;
    width: 100%;
    background: rgb(39, 160, 236);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 13px 20px;
    border-radius: 14px;
    font-size: 20px;
    text-transform: capitalize;
    box-shadow: 0 16px 40px hsla(0, 0%, 0%, 0.25);
    z-index: 1;
    transition: 0.25s ease;
}

.form-btn::before {
    content: "";
    position: absolute;
    inset: 1px;
    background: linear-gradient(to bottom right,
            hsla(240, 1%, 18%, 0.251) 0%,
            hsla(240, 2%, 11%, 0) 100%);
    border-radius: inherit;
    z-index: -1;
    transition: 0.25s ease;
}

.form-btn ion-icon {
    font-size: 16px;
}

.form-btn:hover {
    background: linear-gradient(to bottom right,
            hsl(213, 83%, 56%) 0%,
            hsla(36, 100%, 69%, 0) 50%);
}

.form-btn:hover::before {
    background: linear-gradient(135deg,
            hsla(45, 100%, 71%, 0.251) 0%,
            hsla(35, 100%, 68%, 0) 59.86%);
}

.form-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.form-btn:disabled:hover {
    background: linear-gradient(to bottom right,
            hsl(240, 1%, 25%) 3%,
            hsl(0, 0%, 19%) 97%);
}

.form-btn:disabled:hover::before {
    background: linear-gradient(to bottom right,
            hsla(240, 1%, 18%, 0.251) 0%,
            hsla(240, 2%, 11%, 0) 100%),
        hsl(240, 2%, 13%);
}

.form-btn:hover span:hover {
    color: black;
}
@media (max-width: 768px) {
    .mapbox{
        width: 100%;
    }
    .contact-form{
        width: 100%;
    }
}
</style>