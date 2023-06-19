/**
 * Main entry point. Create and mount App component.
 */
/* eslint-disable */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
//import AppTwo from './AppTwo.vue'
import HomeComponent from './components/HomeComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import ProjectComponent from './components/ProjectComponent.vue'
import ContactForm from './components/ContactForm.vue'

import './styles.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', name: 'Home', component: HomeComponent},
        {path:'/about', name: 'About Me', component: AboutComponent},
        {path:'/projects', name: 'Projects', component: ProjectComponent},
        {path:'/contact', name: 'Contact Me', component: ContactForm}
    ]
});

createApp(App).use(router).mount('#app')
//createApp(AppTwo).mount('#app')
/* eslint-disable */