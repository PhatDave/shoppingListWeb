import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import ShoppingListComponent from "./components/ShoppingList/ShoppingListComponent.vue";
import TodoListComponent from "./components/TodoList/TodoListComponent.vue";

import './style.css';

const routes = [
	{
		path: '/shop',
		component: ShoppingListComponent
	},
	{
		path: '/todo',
		component: TodoListComponent
	},
	{
		path: '/:any*',
		redirect: '/shop'
	},
]

const router = createRouter({
	                            history: createWebHistory(),
	                            routes,
                            });

const app = createApp({});
app.use(router);

app.mount('#app');
