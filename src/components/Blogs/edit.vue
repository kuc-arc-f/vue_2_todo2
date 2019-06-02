<template lang="html">
    <div>
        <div id="flash_message" v-if="message">
            <span class="badge badge-success">
                <h3 id="h3_msg" style="margin : 15px;">{{ message }}</h3>
            </span>
        </div>
        <!-- -->        
        <h1>Blogs - edit</h1>
        <div class="form-group" style="text-align: right;">
            <router-link :to="'/blogs/show/' + page_id " target="_blank"
             class="btn btn-outline-primary">preview</router-link>
        </div>
        <div class="form-group">
            <label for="TopicTitle">タイトル</label>
            <input type="text" class="form-control" id="title" v-model="title" >
        </div>
        <div class="form-group">
            <label for="TopicContent">content</label>
            <textarea class="form-control" id="content" rows="10" v-model="content"></textarea>
        </div>
        <button v-on:click="updateTask" class="btn btn-primary">更新</button>
        <hr />
        <button v-on:click="deleteTask" class="btn btn-danger">削除</button>
    </div>
</template>

<script>
import axios from 'axios'
import {Mixin} from '../../mixin'
import jQuery from 'jquery'

export default {
    mixins:[Mixin],
    created() {
        this.baseUrl = this.sysConst.API_BASE;
        this.page_id = this.$route.params.id
    },
    data() {
        return {
            title:'',
            content:'',
            baseUrl : '',
            page_id: 0,
            message : '',
        }
    },
    mounted: function() {
        this.getItem();
    },
    methods: {
        getItem: function() {
            var url = this.baseUrl +'blogs/api_view/'+ this.$route.params.id;
            var item = []
            axios.get(url )
            .then( ( res ) => {
                item = res.data;
                console.log(res.data.title )
                this.title = item.title
                this.content = item.content
            });                        
        },
        updateTask: function () {
            var self = this
            var hostUrl = this.baseUrl +'blogs/api_update/'+ this.$route.params.id;
            jQuery.ajax({
                url: hostUrl,
                type:'POST',
                dataType: 'json',
                data : {
                    'data[Blog][id]' : this.$route.params.id, 
                    'data[Blog][title]' : this.title, 
                    'data[Blog][content]' : this.content
                },
                timeout:3000,
            }).done(function(data) {
                console.log("ajax-ok");
                console.log(data);
                self.message = '更新が完了しました。'
            }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
                console.log("ajax-error");
                console.log( errorThrown );
            })
        },
        deleteTask: function () {
            var self = this
            var url = this.baseUrl +'blogs/api_delete/'+ this.$route.params.id;
            axios.get(url).then(res => {
                console.log(res.data );
                if(res.data.ret == 1){
                    console.log(res.data.ret );
                    var arr=[{message : '削除が完了しました。'}]
                    self.set_exStorage(self.sysConst.STORAGE_KEY_flash, arr )
                    self.$router.push('/blogs')                    
                }else{
                    console.log(res.data );
                }
            });            
        }
    }
}
</script>
