<template>
<div>
    <br />
    <ul>
        <li class="nav-item active">
            <h4>
            <router-link  to="/" class="nav-link">Top</router-link>
            </h4>
        </li>
        <!--
        <li class="nav-item active">
            <router-link  to="/home" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item active">
            <h4>
            <router-link  to="/blogs" class="nav-link">Blogs</router-link>
            </h4>
        </li>
        -->
        <li class="nav-item active">
            <router-link  to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item active">
            <router-link  to="/todos" class="nav-link">Todos</router-link>
        </li>
    </ul>
    <hr />
</div>
</template>

<script>
export default {
  created () {
    /* console.log('AA') */
  }
}
</script>
