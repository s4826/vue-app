/* EmailJS code based on code found at: https://www.emailjs.com/docs/tutorial/creating-contact-form/ */

<template>
    <div class="contact-wrapper">
        <h2>Let me know if you have any comments</h2>
        <form id="contact-form" @submit.prevent="sendEmail">
            <div class="input-section">
                <label for="from_name">Name: </label>
                <input type="text" name="from_name" required>
            </div>
            <div class="input-section">
                <label for="from_email">Email: </label>
                <input type="email" name="from_email">
            </div>
            <div class="input-section">
                <label for="message">Message: </label>
                <textarea
                    type="text"
                    name="message"
                    rows="5"
                    required
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
        <p v-if="emailSent" class="email-sent">Email sent! I'll get back to you soon...</p>
    </div>
</template>

<script>
import emailjs from "@emailjs/browser";
emailjs.init("vid5wIWFiMDQjv9Ok");

export default {
    name: "ContactForm",
    data() {
        return {
            emailSent: false
        }
    },
    methods: {
        sendEmail(e) {
            emailjs.sendForm("website_feedback_service", "template_sc9jpki", e.target)
                .then(response => {
                    this.emailSent = true;
                    console.log(response);
                }).then(() => setTimeout(() => this.emailSent = false, 5000))
                .catch(err => console.log(err));
        }
    }
}
</script>

<style scoped>
    .contact-wrapper {
        background-color: rgba(164, 128, 255, 0.5); 
        display: block;
        margin: 50px auto;
        padding: 10px;
        width: 75%;
        min-width: 265px;
        max-width: 450px;
        text-align: center;
        border-radius: 10px;
        align-self: flex-start;
    }

    .input-section {
        display: flex;
        margin: 2px;
    }

    .email-sent {
        font-size: x-large;
        font-weight: 700;
    }

    label {
        flex-grow: 1;
        text-align: center;
        padding-right: 5px;
    }

    textarea {
        resize: vertical;
    }

    button {
        margin-top: 5px;
    }

    input, textarea {
        flex-grow: 2;
    }

    form {
        padding-right: 10px;
    }
</style>
