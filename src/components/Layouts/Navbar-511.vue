<template>

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Vue_2</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <!--
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        -->
        <li>
            <router-link  to="/" class="nav-link">Home</router-link>
        </li>
        <li>
            <router-link  to="/about" class="nav-link">About</router-link>
        </li>
        <li>
            <router-link  to="/users/logout" class="nav-link">Logout</router-link>
        </li>
        <li>
            <router-link  to="/users/login" class="nav-link">Login</router-link>
        </li>
        <li>
            <router-link  to="/tasks" class="nav-link">Tasks</router-link>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

</template>

<script>
export default {
  created () {
    /* console.log('AA') */
  }
}
</script>
