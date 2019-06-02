<template>
    <div>
        <flash-message></flash-message>
        <h1>Todos - Index:</h1>
        
        <hr />
        <router-link :to="'/todos/new/'" class="btn btn-primary"> add </router-link><br />
        <br />
        <div v-if="complete==0">
            <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active">未完</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" v-on:click="set_complete(1)">完了済</a>
            </li>
            </ul>
        </div>
        <div v-else>
            <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" v-on:click="set_complete(0)">未完</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active">完了済</a>
            </li>
            </ul>              
        </div>        
        <!-- -->
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
                <router-link :to="'/todos/show/' + blog.id">{{ blog.title }}</router-link>
                </h4>
            </td>
            <td>{{ blog.date_str }}</td>
            <td>&nbsp;<router-link :to="'/todos/edit/' + blog.id" class="btn btn-outline-primary"> edit </router-link>
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
        this.getTasks(0)
    },
    data () {
        return {
            blogs: [],
            user_id : '',
            baseUrl : '',
            complete : 0,
        }
    },
    methods: {
        getTasks(complete) {
            var todos = []
            var url = this.baseUrl +'todos/api_index'
            console.log(url)
            axios.get(url)
            .then(res =>  {
                var items = res.data
                items.forEach( function (item) {
                    if(item.complete == complete ){
                        todos.push(item)
//                        console.log(item)
                    }
                }); 
                this.blogs = todos           
            })
        },
        set_complete(value) {
            console.log(value)
            this.complete = value
            this.getTasks(value)
        }    
    }
}
</script>
<!-- -->
<style>
</style>
