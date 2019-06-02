<template>
    <div>
        <div id="flash_message" v-if="message">
            <span class="badge badge-success">
                <h3 id="h3_msg" style="margin : 15px;">{{ message }}</h3>
            </span>
        </div>
    </div>
</template>

<script>
import {Mixin} from '../../mixin'

export default {
    mixins:[Mixin],
    created() {
//        console.log( this.sysConst.STORAGE_KEY_flash )
        this.load_msg()
    },
    data() {
        return {
            message : '',
        }
    },
    methods: {
        load_msg() {
            var dat = this.get_exStorage( this.sysConst.STORAGE_KEY_flash )
            if(dat.length > 0){
                console.log(dat[0])
                this.message = dat[0].message
                this.remove_exStorage(this.sysConst.STORAGE_KEY_flash)
//                this.message =dat.message;
            }
            console.log(this.message )
        }            
    }
}
</script>

<style>
</style>

