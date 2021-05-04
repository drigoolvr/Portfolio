<template>
    <div class = "container">
       <i id = "back-to-top" class="fas fa-arrow-up" @click = "scrollTop"></i>        
    </div>  
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        scrollTop: function() {
            document.querySelector('html').scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });       
        }
    }        
}
</script>
    
<style scoped>
   #back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        border: 1px solid var(--palleteWhite);
        border-radius: 50px;
        cursor: pointer;
        color: var(--palleteWhite);
        transition: all 0.30s ease;
        text-align: center;
        font-size: 40px;
        line-height: 60px;
        background-color: var(--palleteRed);
        box-shadow: 0px 0px 15px var(--palleteRed);
        text-shadow: 2px 2px 0px var(--palleteBlack);
        z-index: 125;
    }

    #back-to-top:hover {
        background-color: var(--palleteRedHover);
    }
</style>