<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#">SPA1</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
            <li class="nav-item active">
                <router-link  to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link  to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
                <a href="#" v-on:click="logout" class="nav-link">Logout</a>
            </li>
            <li class="nav-item">
                <router-link  to="/users/login" class="nav-link">Login</router-link>
            </li>
            <li>
                <router-link  to="/tasks" class="nav-link">Task</router-link>
            </li>            
			</ul>
		</div>
	</nav>

</template>

<script>
    export default {
        created() {
        },
        data() {
            return {
                tasks: [],
                user : '',
                store:[]
            }
        },
        methods: {
            logout() {
                console.log('#logout')
                myStorage.remove()
                window.location.href='/users/login'
            }            
        }
    }
</script>