import * as a from './a_type.js'
import * as m from './m_type.js'
import axios from 'axios'

const actions = {
	[a.ADDGOODS]({commit},params){
			// console.log(params)
		axios('http://localhost:4000/dl/api/channel/index?channel_id='+params.AppHeaderList+'&is_one_with_four=0&page='+params.isNum+'&appversion=5.7.5&app_from_page=tab_daling',{
		params:{_:Date.now()}
		}).then((res)=>{
			if(res){
				commit(m.ADDGOODS,params)
			}
		})
	},
	[a.REDUCEGOODS]({commit},params){
		axios('http://localhost:4000/dl/api/channel/index?channel_id='+params.AppHeaderList+'&is_one_with_four=0&page='+params.isNum+'&appversion=5.7.5&app_from_page=tab_daling',{
			params:{_:Date.now()}
		}).then((res)=>{
			if(res){
				commit(m.REDUCEGOODS,params)
			}
		})
	},
	[a.INITCAR]({commit}){
		let car = JSON.parse(localStorage.car || '[]')
		commit(m.INITCAR,car)
	},
	[a.ICLASS]({commit},i){
		commit(m.ICLASS,i)
	},
	[a.FCLASS]({commit}){
		commit(m.FCLASS)
	},
	[a.REMOVEGOODS]({commit}){
		commit(m.REMOVEGOODS)
	}
}

export default actions