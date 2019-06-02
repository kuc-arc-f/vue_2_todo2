<template>
<div id="div_navigate_index">
    <div id="div_head" class="cover">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <a href="/"><p>{{ site_name }}</p></a>
                </div>
                <div class="col-sm-8" style="text-align: right;">
                    <!-- nav -->	  
                    <div class='menubar'>
                    <ul class='menu text-border'>
                        <li><router-link :to="'/blogs/'">admin</router-link></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
      </div><!-- end_div_head -->
      <!-- mobile-nav -->
    <div id="nav-mobile" style="width:100%;">
        <a href="#" v-on:click="sp_btn_push" class="toggle">
            <span class="glyphicon glyphicon-menu-hamburger" style="font-size: 34px; color: #FFF"></span>
        </a>
        <div class="mobile-child">
            <ul class='ul_mobile-child'>
                <li class="mobile-menu-item"><router-link :to="'/blogs/'">admin</router-link></li>
            </ul>
        </div>
      </div>
</div>
</template>

<script>
import {Mixin} from '../../mixin'
import jQuery from 'jquery'

export default {
    mixins:[Mixin],
    created () {
        this.site_name = this.sysConst.SITE_NAME;
    },
    data () {
        return {
            site_name : ''
        }
    },
    methods: {
        sp_btn_push: function() {
//            console.log('#push')
            this.open_menu()
        },
        open_menu: function() {
            jQuery(".toggle").next().slideToggle(300);
        }
    },
}

</script>
