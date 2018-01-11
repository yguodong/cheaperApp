<template>
    <div class="app-list">
        <div class="search">
            <div class="search_input">
                <i class="yo-ico">&#xf067;</i>
                <input type="search" placeholder="搜索商品" data-search-input="">
            </div>
        </div>
            

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
                        <li  v-for="liList in hList.list">
                                <em><img :src="liList.category_img_url" alt=""></em>                           
                            <span><i>{{liList.alt}}</i></span>
                        </li>

                        


                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name:"app-list",
        data:function(){
            return{
                grooms:[],
                shop:[],
                hShow:[],
                isShow:0
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
            console.log(response.data.data[i].block_list)
                
                })
        }
    },
    created(){
        this.getData()
        this.nim(0)
    }


}

</script>

<style>


</style>