<template>
    <div class = "container" id = "id-portfolio">
        <section class = "name-area">            
            <h2>Portfólio</h2>
        </section>   

        <section class = "projects-area">
            <div class = "project" v-for = "(project, index) in projetos" v-bind:key = "index" @click = "openProject(index)">
                <div class = "project-info">
                    <div class = "project-info-content">
                        <h2>{{project.nome}}</h2>
                        <div class = "technologies" >
                            <ul v-for = "(tech, index) in project.tech" v-bind:key = "index">
                                <li>{{tech}}</li>                                
                            </ul>
                        </div>
                        <button>Ver projeto</button>         
                    </div>                                      
                </div>
                <img v-bind:src = "getImgUrl(project.thumbnail)" v-bind:alt = "project.nome" />
                <p class = "mobile-project-title">{{project.nome}}</p>
            </div> 
        </section>      
    </div>
</template>

<script>

export default {
    name:'Portfolio',
    data() {
        return {
            projetos: [
                { nome:'flowstore', thumbnail: 'flowstore/flowstore-thumbnail.png',
                    tech: ['HTML', 'CSS', 'JavaScript']
                },

                { nome:'justblue', thumbnail: 'justblue/justblue-thumbnail.png',
                    tech: ['HTML', 'CSS', 'JavaScript']
                },

                { nome:'medclinic', thumbnail: 'medclinic/medclinic-thumbnail.png',
                    tech: ['HTML', 'CSS', 'JavaScript']
                },

                { nome:'revox', thumbnail: 'revox/revox-thumbnail.png',
                    tech: ['HTML', 'CSS', 'JavaScript']
                },                                      
            ]      
        }
    },
    methods: {
        getImgUrl: function(item) {
            return require('../assets/images/projetos/' + item);
        },
        openProject: function(index) {
            this.$router.replace({path:'/project/' + this.projetos[index].nome.toLowerCase()});           
        }       
    } 
}
</script>
    
<style scoped>
   .container {
        padding: 20px;
        width: 100%;
        max-width: 1500px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .name-area {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    .name-area h2 {
        color: var(--palleteWhite);
        text-shadow: 2px 2px 0px var(--palleteBlack);
        font-size: 40px;
        line-height: 40px;
    }

    .name-area p {
        text-align: center;
        color: var(--palleteWhite);
        margin-top: 15px;
        margin-bottom: 20px;
        font-family: "Montserrat";
    }

    .projects-area {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        height: fit-content;
    }

    .project {
        width: 40%;
        height: 300px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        margin: 0px;
        border: 1px solid var(--palleteBlack);
        margin: 1px; 
    }
    
    .project-info {
        position: absolute;
        width: 100%;
        height: 0%;        
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease;
        z-index: 50;         
        overflow-y: hidden;
    }

    .project:hover .project-info {
        height: 100%;
    }

    .project-info-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .project-info h2 {
        color: var(--palleteWhite);
        text-shadow: 2px 2px 0px var(--palleteBlack);
        font-size: 50px;
        line-height: 50px;
    }

    .project-info button {
        margin-top: 5px;
        padding: 5px 20px;
        border-radius: 30px;
        color: var(--palleteWhite);
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;        
        font-size: 20px;
        outline: none;
        text-shadow: 1px 1px 0px black;
        border: 1px solid white;
    }  

    .technologies {
        display: flex;
        margin: 10px;
    }

    .technologies ul {
        list-style-type: none;
    }  

    .technologies li {
        color: var(--palleteWhite);
        background-color: var(--palleteRed);
        font-size: 15px;
        outline: none;
        cursor: pointer;
        border-radius: 20px;
        margin: 5px;
        text-align: center;
        padding: 5px 10px;
        text-shadow: 1px 1px 0px black;
    }

    .project img {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .mobile-project-title {
        position: absolute;
        z-index: 60;
        color: var(--palleteBlack);
        width: 100%;
        background-color: var(--palleteWhite);
        bottom: 0;
        text-align: center;
        display: none;
    }

    @media (max-width: 450px) {
        .project {
            width: 100%;
            height: 250px;
            margin: 10px 0px;
        }

        .project:hover .project-info {
            height: 0%;
        }

        .mobile-project-title {
            display: initial;
        }
    }

    @media (min-width: 450px) and (max-width: 800px) {
        .project {
            height: 200px;
        }

        .project:hover .project-info {
            height: 0%;
        }

        .mobile-project-title {
            display: initial;
        }
    }
</style>