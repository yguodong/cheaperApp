<template>
    <div class="app-list">
        <div class="ylscontent">
            <div class="leftsort">
                <ul>
                    <li v-for="(groom,i) in grooms" :key=groom.id @click="nim(i)" :class="isShow==i?'show':''">
                        {{groom.title}}
                    </li>
                   
                </ul>
            </div>
            <div class="rightsort">
                <div class="showgoods" v-for="hList in hShow">
                    <h3>{{hList.title}}</h3>
                    <ul class="all">
                        <router-link  v-for="(liList,j) in hList.list" :key=j to="/search" tag="li" @click.native="hq(j)">

                                <em><img :src="liList.category_img_url" alt=""></em>                           
                                <span><i>{{liList.alt}}</i></span>
                        </router-link>
                    </ul>
                    
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios';
    import bus from '../modules/bus'
    export default{
        name:"app-list",
        
        data:function(){
            return{
                grooms:[],
                shop:[],

                hShow:[],
                isShow:0,

                record:{},
                isNum:0
            }
        },
        methods:{
            //定义方法获取数据
            getData(){
                let that=this
                http://touch.daling.com/api/menu/getMenu?_=1515245797260
                axios.get('http://localhost:4000/dl/api/menu/getMenu',{
                params:{_t:Date.now()}
            }).then((response)=>{
           // console.log(response)
            that.grooms=response.data.data
           // console.log(that.grooms.block_list["0"].list)
                })
        },
        nim(i){
            let that=this
            this.isShow=i
            
                http://touch.daling.com/api/menu/getMenu?_=1515245797260
                axios.get('http://localhost:4000/dl/api/menu/getMenu',{
                params:{_t:Date.now()}
            }).then((response)=>{
           // console.log(response)
             that.hShow=response.data.data[i].block_list
            // that.record=response.data.data[i].block_list[0].list[0].id
            //  console.log(that.record)
             //http://touch.daling.com/search.html?tags=%E9%80%81%E5%A5%B9&is_recommend=1&id=92&key=app_menu_more
            // console.log(response.data.data[i].block_list)
                // console.log(that.hShow.list[0].id)
                })
                

        },
        hq(j){
            this.isNum=j
            let that=this
           let i=this.isShow
            http://touch.daling.com/api/menu/getMenu?_=1515245797260
                axios.get('http://localhost:4000/dl/api/menu/getMenu',{
                params:{_t:Date.now()}
            }).then((response)=>{
           // console.log(response)
            // that.hShow=response.data.data[i].block_list
            that.record=response.data.data[i].block_list[0].list[j].extra
            console.log(that.record) 
                bus.$emit('abc',that.record)
                })
            
        },
        

    },
    created(){
        
        this.getData()
        this.nim(0)
        
        
    }  


}

</script>

<style>


</style>