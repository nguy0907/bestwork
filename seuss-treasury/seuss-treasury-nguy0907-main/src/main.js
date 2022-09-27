import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

import Books from './views/Books.vue'
import Book from './views/Book.vue'
import Quotes from './views/Quotes.vue'

const routes = [
    {
        path: '/',
        component:Books
    },
    {
        path: '/Book/:id',
        component: Book,
        name:'Book',
        props: true
    },
    {
        path: '/quotes',
        component: Quotes
    }
]
//create new router
const router = createRouter({
    history: createWebHashHistory(),
    routes:routes
})

createApp(App).use(router).mount('#app')
