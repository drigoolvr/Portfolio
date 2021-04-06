<template>
    <section class = "container-home">       
        <About />
        <Skills />
        <Portfolio />
        <Contact />
    </section>
</template>

<script>
import About from './About.vue';
import Skills from './Skills.vue';
import Portfolio from './Portfolio.vue';
import Contact from './Contact.vue';

export default {
    name:'Home',
    data() {
        return {

        }
    },
    components: {
        About,
        Skills,
        Portfolio,
        Contact
    },
    created: function(){
        window.scrollTo(0,0);
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