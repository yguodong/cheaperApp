import * as m from './m_type.js'

const mutations = {
	[m.INITCAR](state,car){
		state.car = car
	},
	[m.ADDGOODS](state,{id,name,des,price,country,AppHeaderList,isNum,img}){
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
	[m.REDUCEGOODS](state,{id}){
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
	[m.ICLASS](state,i){
		state.car[i].isTclass = !state.car[i].isTclass
	},
	[m.FCLASS](){
		state.car.forEach((item,i)=>{
			state.car[i].isTclass = !state.car[i].isTclass
		})
	},
	[m.REMOVEGOODS](state){
		state.car.forEach((item,i)=>{
			if(!state.car[i].isTclass){
				state.car.splice(i,1)
			}
		})
		localStorage.car = JSON.stringify(state.car)
	}	
}

export default mutations