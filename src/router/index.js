import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/Home'
import about from '../components/About'

/* todo */
import todosIndex from '../components/Todos/Index'
import todosNew from '../components/Todos/new'
import todosShow from '../components/Todos/show'
import todosEdit from '../components/Todos/edit'


Vue.use(Router)
//
export default new Router({
    /* mode: 'history', */
    routes: [
        { path: '/', component: home },
        { path: '/about', component: about },
        /* todos */
        { path: '/todos', component: todosIndex },  
        { path: '/todos/new', component: todosNew },
        { path: '/todos/show/:id', component: todosShow },
        { path: '/todos/edit/:id', component: todosEdit },        
    ]
})
