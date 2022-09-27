import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

import Contacts from './views/Contacts.vue'
import Contact from './views/Contact.vue'
import NewContact from './views/NewContact.vue'
import EditContact from './views/EditContact.vue'
const routes = [
    {
        path: '/',
        component: Contacts
    },{
        path: '/contact/:id',
        component: Contact,
        name:Contact,
        props:true
    },
    {
        path:'/newcontact',
        component: NewContact
},
{
    path:'/editcontact/:id',
    component: EditContact,
    name:EditContact,
    props:true
}
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes: routes
})
createApp(App).use(router).mount('#app')
