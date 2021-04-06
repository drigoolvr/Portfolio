<template>
    <div class = "container-skills" id = "id-skills">
        <section class = "name-area">                    
            <h2>Habilidades</h2>                 
        </section>

        <section class = "skills">
            <div class = "habilidade" v-for = "(skill, index) in skills" v-bind:key = "index">
                <img v-bind:src = "getImgUrl(skill.icone)" />
                <h2>{{skill.nome}}</h2>                 
                <p>Nível: {{skill.nivel}}</p>
                <div class = "skill-level" v-if = "skill.nivel == 3">
                    <i class="fas fa-star skill-star"></i>
                    <i class="fas fa-star skill-star"></i>
                    <i class="fas fa-star skill-star"></i>
                    <i class="far fa-star skill-star-empty"></i>
                    <i class="far fa-star skill-star-empty"></i>
                </div>

                <div class = "skill-level" v-if = "skill.nivel == 4">
                    <i class="fas fa-star skill-star"></i>
                    <i class="fas fa-star skill-star"></i>
                    <i class="fas fa-star skill-star"></i>
                    <i class="fas fa-star skill-star"></i>
                    <i class="far fa-star skill-star-empty"></i>
                </div>

                <div class = "skill-level" v-if = "skill.nivel == 5">
                    <i class="fas fa-star skill-star"></i>
                    <i class="fas fa-star skill-star"></i>
                    <i class="fas fa-star skill-star"></i>
                    <i class="fas fa-star skill-star"></i>
                    <i class="fas fa-star skill-star"></i>          
                </div>                
            </div>
        </section> 
    </div>
</template>

<script>


export default {
    name:'Skills',
    data() {
        return {
            skills: [
                { 
                    nome: 'HTML5/CSS3', nivel: 5,
                    icone: 'skillicons/htmlecss.jpg'
                },
                { 
                    nome: 'JavaScript', nivel: 4,
                    icone: 'skillicons/javascript.jpg'
                },
                { 
                    nome: 'React JS', nivel: 3,
                    icone: 'skillicons/reactjs.jpg'
                },
                { 
                    nome: 'Vue JS', nivel: 5,
                    icone: 'skillicons/vuejs.jpg'
                },
                { 
                    nome: 'BootStrap', nivel: 4,
                    icone: 'skillicons/bootstrap.jpg'
                },
                { 
                    nome: 'Sass', nivel: 3,
                    icone: 'skillicons/sass.jpg'
                },
                { 
                    nome: 'Git', nivel: 4,                
                    icone: 'skillicons/git.jpg'
                },
                { 
                    nome: 'PHP', nivel: 3,
                    icone: 'skillicons/php.jpg'
                },
                { 
                    nome: 'Adobe XD', nivel: 4,                    
                    icone: 'skillicons/adobexd.jpg'
                }            
            ]
        }
    },
    methods: {
        getImgUrl: function(item) {
            return require('../assets/images/' + item);
        }
    }
}
</script>
    
<style scoped>
   .container-skills {
       width: 100%;
       max-width: 1500px;
       background-color: var(--palleteWhite);   
       display: flex;
       flex-direction: column;
       align-items: center;
       padding: 20px;
    }

    .name-area {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .name-area h2 {
        color: var(--palleteGrey);
        font-size: 40px;
    }

    .skills {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 10px;
        padding: 10px;
        transition: all 0.5s ease;        
    }

    .habilidade {       
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        align-items: center;        
        width: 200px;
        height: fit-content;
        margin: 10px;
        padding: 10px;
    }

    .habilidade img {
        width: 60%;
        height: auto;
        margin: auto;
    }

    .habilidade p {
        color: var(--palleteGrey);
    }

    .habilidade h2{
        text-align: center;
        color: var(--palleteGrey);
    }

    .skill-level {
        display: flex;
        justify-content: center;
        width: fit-content;
    }

    .skill-level img {
        width: 15px;
        height: 15px;
    }

    .skill-star,
    .skill-star-empty {
        color: var(--palleteRed);
        text-shadow: 1px 1px 0px var(--palleteBlack);
    }

    @media (max-width: 450px) {
        .skills {
            padding: 0px;
        }

        .habilidade {
            width: 100%;
            margin: 10px 0px;
        }
    }
</style>