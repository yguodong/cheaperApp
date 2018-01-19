import * as g from './g_type.js'

const getters = {
	[g.MONEY](state){
		let money = 0
		state.car.forEach((item,i)=>{
			if(!state.car[i].isTclass){
				money += state.car[i].price * state.car[i].num
			}
		})
		return money;
	},
	[g.NUM](state){
		let num = 0
		state.car.forEach((item,i)=>{
			if(!state.car[i].isTclass){
				num += state.car[i].num
			}
		})
		return num;
	}
}

export default getters