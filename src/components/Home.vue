<template>
    <section class = "container-home">       
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <BackToTop v-if = "this.showBackToTop"/>
    </section>
</template>

<script>
import About from './About.vue';
import Skills from './Skills.vue';
import Portfolio from './Portfolio.vue';
import Contact from './Contact.vue';
import BackToTop from './BackToTop.vue';

export default {
    name:'Home',
    data() {
        return {
            showBackToTop: false
        }
    },
    components: {
        About,
        Skills,
        Portfolio,
        Contact,
        BackToTop
    },
    methods: {
        backToTop: function() {
            if(window.scrollY > 0) {
                this.showBackToTop = true;
            } else {
                this.showBackToTop = false;
            }
        }
    },
    created: function(){
        window.scrollTo(0,0);
        window.addEventListener("scroll", this.backToTop);
    }
}
</script>
    
<style scoped>
   .container-home {
        width: 100%;
        max-width: 1500px;
        display: flex;
        flex-direction: column;
        align-items: center;  
        overflow-x: hidden;      
   }  
   
   @media (min-width: 1500px) {
		.container-home {
			border-left: 1px solid white;
			border-right: 1px solid white;
		}
	}
</style>