<template>
	<div id="app">
		<Header v-on:btnReturn = "scrollDown"/>	
		<transition name = "fade" mode = "out-in">
			<router-view :key = "$route.path"></router-view>
		</transition>
		<Controls v-if = "$route.name == 'project'" v-on:btnReturn = "scrollDown"/>		
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Controls from './components/Controls.vue';

export default {
	name: 'App',
	components: {
		Header,
		Controls
	},
	data() {
		return {
		
		}
	},
	methods: {
		scrollDown: function(id) {			
			this.$router.replace({name:'home'});
			if(id != 'home') {
				setTimeout(function(){
					let el = document.querySelector(id);
					let coord = el.getBoundingClientRect();
					coord = coord.top + window.scrollY;
					document.querySelector('html').scroll({
						top: coord,
						left: 0,
						behavior: 'smooth'		
					});  
				}, 650);	
			}					
		}		
	}
}
</script>

<style>
	@import 'assets/css/style.css';

	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition-duration: 0.3s;
		transition-property: opacity;
		transition-timing-function: ease;
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}
</style>