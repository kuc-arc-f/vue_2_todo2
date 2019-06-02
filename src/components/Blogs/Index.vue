<template>
    <div>
        <flash-message></flash-message>
        <h1>Blogs - Index:</h1>
        
        <hr />
        <router-link :to="'/blogs/new/'" class="btn btn-primary"> add </router-link><br />
        <br />
        <table class="table">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">date</th>
            <th scope="col">action</th>
        </tr>
        </thead>
        <tbody v-for="blog in blogs" v-bind:key="blog.id">
        <tr>
            <td>{{ blog.id }}</td>
            <td>
                <h4>
                <router-link :to="'/blogs/show/' + blog.id">{{ blog.title }}</router-link>
                </h4>
            </td>
            <td>{{ blog.date_str }}</td>
            <td>&nbsp;<router-link :to="'/blogs/edit/' + blog.id" class="btn btn-outline-primary"> edit </router-link>
            </td>
        </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import {Mixin} from '../../mixin'
import flashMessage from '../../components/Layouts/FlashMessage'

export default {
  mixins:[Mixin],
  components: { flashMessage },
  created () {
//    this.check_userState(this.sysConst.STORAGE_KEY_userData, this)
//    this.user_id = this.get_userId(this.sysConst.STORAGE_KEY_userData )
    this.baseUrl = this.sysConst.API_BASE;
    console.log( this.baseUrl )
    this.getTasks()
  },
  data () {
    return {
      blogs: [],
      user_id : '',
      baseUrl : ''
    }
  },
  methods: {
    getTasks() {
//        var url = this.conv_url('tasks/api_index')
        var url = this.baseUrl +'blogs/api_index'
        console.log(url)
        axios.get(url)
        .then(res =>  {
            this.blogs = res.data
            console.log(res.data.length )
        })
    },
    /*
    conv_url(url) {
        return baseUrl + url
    }    
    */
  }
}
</script>
<!-- -->
<style>
</style>
