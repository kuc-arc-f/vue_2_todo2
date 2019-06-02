<template>
    <div>
        <h1>tasks- test:</h1>
        <hr />
        test : {{ message }}
        <hr />
        <!--
        <div id="content"></div>
        -->
        <div v-html="str_md"></div>
    </div>
</template>

<script>
import {Mixin} from '../../mixin'
import marked from  'marked'

export default {
    mixins:[Mixin],
    created() {
        this.test_marked()
//        console.log( 'test_func='+ this.test_func() )
    },
    data() {
        return {
            user : [],
            message :'',
            str_md : ''
        }
    },
    methods: {
        test_marked() {
            this.str_md = marked('# Marked in the browser\n\nRendered by **marked**.')
            console.log(this.str_md)
        },
    }
}
</script>

