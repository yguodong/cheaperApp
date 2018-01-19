import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const state={
	car:[],
	AppHeaderList:"11",
	isNum:1
}

const getters = {
	money(state){
		let money = 0
		state.car.forEach((item,i)=>{
			if(!state.car[i].isTclass){
				money += state.car[i].price * state.car[i].num
			}
		})
		return money;
	},
	num(state){
		let num = 0
		state.car.forEach((item,i)=>{
			if(!state.car[i].isTclass){
				num += state.car[i].num
			}
		})
		return num;
	}
}

const mutations = {
	initCar(state,car){
		state.car = car
	},
	addGoods(state,{id,name,des,price,country,AppHeaderList,isNum,img}){
		let isHas = state.car.some((item)=>{
			if(item.id == id){
				// console.log(item.id)
				item.num++;
				return true;
			}else{
				return false;
			}
		})
		if(!isHas){
			state.car.push({id,name,des,price,country,AppHeaderList,isNum,img,num:1,isSelect:true,isTclass:false})
			//console.log(state.car)
		}
		localStorage.car = JSON.stringify(state.car)
	},
	reduceGoods(state,{id}){
		let len = state.car.length
		for(let i = 0 ; i < len ; i ++ ){
			if(state.car[i].id == id){
				state.car[i].num--;
				if(state.car[i].num == 0){
					state.car.splice(i,1)
				}
				break;
			}
		}
		localStorage.car = JSON.stringify(state.car)
	},
	Iclass(state,i){
		state.car[i].isTclass = !state.car[i].isTclass
	},
	Fclass(){
		state.car.forEach((item,i)=>{
			state.car[i].isTclass = !state.car[i].isTclass
		})
	},
	removeGoods(state){
		state.car.forEach((item,i)=>{
			if(!state.car[i].isTclass){
				state.car.splice(i,1)
			}
		})
		localStorage.car = JSON.stringify(state.car)
	}	
}

const actions = {
	addGoods({commit},params){
			// console.log(params)
		axios('http://localhost:4000/dl/api/channel/index?channel_id='+params.AppHeaderList+'&is_one_with_four=0&page='+params.isNum+'&appversion=5.7.5&app_from_page=tab_daling',{
		params:{_:Date.now()}
		}).then((res)=>{
			if(res){
				commit('addGoods',params)
			}
		})
	},
	reduceGoods({commit},params){
		axios('http://localhost:4000/dl/api/channel/index?channel_id='+params.AppHeaderList+'&is_one_with_four=0&page='+params.isNum+'&appversion=5.7.5&app_from_page=tab_daling',{
			params:{_:Date.now()}
		}).then((res)=>{
			if(res){
				commit('reduceGoods',params)
			}
		})
	},
	initCar({commit}){
		let car = JSON.parse(localStorage.car || '[]')
		commit('initCar',car)
	},
	Iclass({commit},i){
		commit('Iclass',i)
	},
	Fclass({commit}){
		commit('Fclass')
	},
	removeGoods({commit}){
		commit('removeGoods')
	}
}

const store = new Vuex.Store({
	state,getters,mutations,actions
})

export default store