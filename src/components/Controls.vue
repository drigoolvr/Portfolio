<template>
    <div class = "controls">
        <i id = "arrow-previous" class="fas fa-arrow-left"  @click = "previousProject" v-if = "previousButtonShow"></i>
        <i v-else id = "arrow-previous-hidden" class="fas fa-arrow-left" ></i>
        <i id = "btn-voltar" class="fas fa-th" @click = "voltar('#id-portfolio')"></i>
        <i id = "arrow-next" class="fas fa-arrow-right" @click = "nextProject" v-if = "nextButtonShow"></i>
        <i v-else id = "arrow-next-hidden" class="fas fa-arrow-right" ></i>            
    </div>  
</template>

<script>
export default {
    data() {
        return {
            projectId: 0,
            previousButtonShow: true,
            nextButtonShow: true,    
            projetos: [
                'greenworld',
                'flowstore',
                'justblue',
                'medclinic',
                'revox'                                    
            ]
        }
    },
    methods: {      
        nextProject: function() {             
            this.projectId++; 
            this.showButtons();
            let projectName = this.projetos[this.projectId].toLowerCase();           
            this.$router.replace({path:'/project/' + projectName});                
        },
        previousProject: function() {                    
            this.projectId--;  
            this.showButtons();        
            let projectName = this.projetos[this.projectId].toLowerCase();             
            this.$router.replace({path:'/project/' + projectName});               
        },
        voltar: function(id) {
            this.$emit('btnReturn', id); 
        },
        showButtons: function() {
            if(this.projectId == this.projetos.length - 1) {
                this.nextButtonShow = false;
                this.previousButtonShow = true;
            }
            else if(this.projectId == 0) {
                this.previousButtonShow = false;
                this.nextButtonShow = true;
            } 
            else {
                this.nextButtonShow = true;
                this.previousButtonShow = true;
            }  
        },
    },  
    created: function() {     
        let projectName = this.$route.params.pjName.toLowerCase();
        let id = this.projetos.findIndex(item => item === projectName);
        if(id != -1) {
            this.projectId = id;
            this.showButtons();
        }   
    },
    watch: {
        '$route.params.pjName': function() {
            let projectName = this.$route.params.pjName.toLowerCase();
            let id = this.projetos.findIndex(item => item === projectName);
            if(id != -1) {
                this.projectId = id;
                this.showButtons();
            }
        }
    }
}
</script>
    
<style scoped>
    .controls {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        height: 50px;
        background-color: var(--palleteRed);
        position: fixed;
        margin: auto;
        bottom: 10px;
        z-index: 100;
        border:1px solid var(--palleteWhite);
        border-radius: 50px;
        box-shadow: 0px 0px 10px var(--palleteWhite);
    }

    .controls button:hover {
        color: var(--palleteWhiteHover);
    }

    #arrow-previous,
    #arrow-next {
        cursor: pointer;
        color: var(--palleteWhite);
        transition: all 0.30s ease;
        font-size: 40px;
        outline: none;
        line-height: 50px;
        margin: 0px 15px;
        text-shadow: 2px 2px 0px var(--palleteBlack);
    }

    #arrow-previous:hover,
    #arrow-next:hover,
    #btn-voltar:hover {
        color: var(--palleteWhiteHover);
    }

    #arrow-previous-hidden,
    #arrow-next-hidden {
        font-size: 40px;
        line-height: 50px;
        opacity: 1;
        color: var(--palleteRed);
        visibility: hidden;
        outline: none;
        margin: 0px 15px;           
    }

    #btn-voltar {
        cursor: pointer;
        color: var(--palleteWhite);
        transition: all 0.30s ease;
        font-size: 40px;
        outline: none;
        line-height: 50px;
        margin: 0px 15px;
        text-shadow: 2px 2px 0px var(--palleteBlack);
    }
</style>