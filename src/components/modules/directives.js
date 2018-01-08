import Vue from "vue"
Vue.directive("scroll-show", {
	bind(el, binding) {
		window.addEventListener("scroll", function() {
			if(this.scrollY>Number(binding.arg)){
				binding.value.value=true
			}else{
				binding.value.value=false
			}
		})
	}
})
Vue.directive('back-top',{
	inserted(el,binding){
		let e = binding.arg || 'click'
		el.addEventListener(e,function(){
			document.documentElement.scrollTop = document.body.scrollTop =0;
		})
	}
})