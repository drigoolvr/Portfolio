<template>
    <div class = "container">
        <div class = "project-page">                         
            <h2 v-text = "getName()"></h2>
            <p v-text = "getIndex()"></p><br>
            <strong><p>GITHUB</p></strong>
            <a v-bind:href = "getGithub()" target = "_blank" v-text = "getName()" v-bind:title = "'Repositório: ' + getName().toUpperCase()"></a><br>
            <strong><p>DESCRIÇÃO</p></strong>
            <p v-text = "getDesc()"></p><br>         
            <img 
                class = "project-picture" 
                v-bind:alt = "getName()" 
                v-for = "(foto, index) in projetos[this.projectId].fotos" 
                v-bind:src = "getImgUrl(foto)" 
                v-bind:key = "index"
            />  
            <br>
            <i id = "back-to-top" class="fas fa-arrow-up" @click = "backToTop()"></i>
        </div>        
    </div>
</template>

<script>
export default {
    data() {
        return {  
            projectId: 0,                   
            projetos: [
                {   
                    nome:'greenworld', 
                    descricao:'Página de conscientização sobre sustentabilidade e meio ambiente',
                    github:'https://github.com/drigoolvr/GreenWorld',
                    fotos:[
                        'greenworld/greenworld-full.png'
                    ]
                }, 

                {   
                    nome:'flowstore', 
                    descricao:'Site para exposição e venda de roupas de marcas famosas',
                    github:'https://github.com/drigoolvr/FlowStore',
                    fotos:[
                        'flowstore/flowstore-full.png'
                    ]
                },  

                { 
                    nome:'justblue', 
                    descricao:'Site para uma empresa de consultoria empresarial', 
                    github:'https://github.com/drigoolvr/Justblue',
                    fotos:[
                        'justblue/justblue-full.png'
                    ]
                },

                { 
                    nome:'medclinic', 
                    descricao:'Site de uma clínica particular com divulgação de notícias médicas',
                    github:'https://github.com/drigoolvr/Medclinic',
                    fotos:[
                        'medclinic/medclinic-full.png'
                    ]
                },

                { 
                    nome:'revox', 
                    descricao:'Site de uma empresa de design gráfico', 
                    github:'https://github.com/drigoolvr/Revox',
                    fotos:[
                        'revox/revox-full.png'
                    ]
                }                           
            ]
        }
    },    
    methods: {
        getImgUrl: function(foto) {
            return require('../assets/images/projetos/' + foto);
        },  
        getName: function() {
            try {
                return this.projetos[this.projectId].nome;
            }
            catch {
                this.$router.replace({path:'/project'});
            }            
        },
        getDesc: function() {
            try {
                return this.projetos[this.projectId].descricao;
            }
            catch {
                this.$router.replace({path:'/project'});
            }            
        },
        getIndex: function() {
            return (this.projectId + 1) + ' / ' + this.projetos.length;
        },
        getGithub: function() {
            try {
                return this.projetos[this.projectId].github;
            }
            catch {
                this.$router.replace({path:'/project'});
            }            
        },  
        backToTop: function() {
            document.querySelector('html').scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });           
        }     
    },
    created: function() {    
        let projectName = this.$route.params.pjName.toLowerCase();
        let id = this.projetos.findIndex(item => item.nome === projectName);
        if(id != -1) {
            window.scrollTo(0,0);
            this.projectId = id;
        }
        else {
            this.$router.replace({path:'/'});
        }         
    }
}
</script>
    
<style scoped>
    .container {
        width: 100%;
        max-width: 1500px;
    }

    .project-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: fit-content;
        padding-top: 30px;
        padding-bottom: 80px;
        border-radius: 15px;
        padding-left: 5px;
        padding-right: 5px;
    }

    .project-picture {
        width: 85%;
        min-height: 700px;
        border: 1px solid var(--palleteBlack);
        margin: 10px;
        background-color: var(--palleteBlack);
    }

    .project-page h2 {
        color: var(--palleteWhite);
        font-size: 40px;
        text-shadow: 2px 2px 0px var(--palleteBlack);
        margin-bottom: 10px;
    }

    .project-page p {
        color: white;
        font-size: 14px; 
        font-family: "Montserrat"; 
        text-align: center;   
        line-height: 26px; 
    }

    .project-page a {
        color: var(--palleteRed);
        font-size: 20px;
    }

    .project-page a:visited {
        color: var(--palleteRed);
    }
    
    #back-to-top {
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
        box-shadow: 0px 0px 10px var(--palleteWhite);
        text-shadow: 2px 2px 0px var(--palleteBlack);
    }

    #back-to-top:hover {
        background-color: var(--palleteRedHover);
    }

    @media (max-width: 450px) {
        .project-picture {
            width: 95%;
        }
    }

    @media (min-width: 450px) and (max-width: 800px) {
        .project-picture {
            width: 90%;
        }
    }

    @media (min-width: 800px) and (max-width: 1100px) {
        .project-picture {
            width: 85%;
        }
    }

    @media (min-width: 1500px) {
		.container {
			border-left: 1px solid white;
			border-right: 1px solid white;
		}
	}

</style>