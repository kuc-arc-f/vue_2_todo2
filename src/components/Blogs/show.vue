<template>
    <div>
        <h1>{{ item.title }}</h1>
        <p style="margin-bottom: 20px;">Date: {{ item.date_str }}</p>
        <hr />
        <div id="post_item" v-html="item.content"></div>
    </div>
</template>

<script>
import axios from 'axios'
import marked from  'marked'
import {Mixin} from '../../mixin'

export default {
    mixins:[Mixin],
    created() {
        this.baseUrl = this.sysConst.API_BASE;
        console.log( this.baseUrl )        
    },
    data: function( ) {
        var itemDat = {title : '', content : ''}
        return {
            item: itemDat,
            editFlg: false,
            updated: false,
            baseUrl : '',
        }
    },
    mounted: function() {
        this.getItem()
    },
    methods: {
        getItem: function() {
            var url = this.baseUrl +'blogs/api_view/'+ this.$route.params.id;
            axios.get(url )
            .then( ( res ) => {
                this.item = res.data;
                this.item.content = marked(this.item.content)
                console.log(res.data )
            });            
        },
    }
}
</script>
<!-- -->
<style>
/* div#post_item > h3{ color :gray; } */
div#post_item > p > img{
    max-width : 100%;
    height : auto;
}
div#post_item > hr {
  height: 1px;
  background-color: #000;
  border: none;
}
</style>


