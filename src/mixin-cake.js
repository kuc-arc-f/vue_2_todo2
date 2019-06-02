export const Mixin =  {
  created:function(){
    this.set_sysConst()  
  },
  methods:{
    set_sysConst(){
        this.sysConst={
            STORAGE_KEY_showId : 'key_show_id',
            STORAGE_KEY_tasksData : 'key_tasks_dat',
            STORAGE_KEY_userData : 'key_user_dat',
            STORAGE_KEY_flash : 'strage_flash_key',
            API_BASE : 'http://localhost/apiphp1/',
        }
    },
    /* local storage */
    set_exStorage(key, message){
        localStorage.setItem( key, JSON.stringify(message))
    },
    get_exStorage(key){
        var dat = JSON.parse(localStorage.getItem(key) || '[]')
        console.log( 'dat.len='+ dat.length )
        return dat
    },
    /* user */
    check_userState(key, self){
        var store = this.get_exStorage(key)
        if( store.length >0){
            /* var user = store[0] */
            /* console.log(user.uid ) */
        }else{
            self.$router.push('/users/login')            
        }
    },
    get_userId(key ){
        var ret = '';
        var store = this.get_exStorage(key)
        if( store.length >0){
            var user = store[0]
            /* console.log(user.uid ) */
            ret = user.uid
        }       
        return ret
    },
    test_func(){
        return 'ABC'
    },

  }
}
