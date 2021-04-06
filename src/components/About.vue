<template>
    <div class = "container" id = "id-about">
        <div class = "container-left">
            <i class="fas fa-quote-left red-quote-left"></i>
            <p class = "quote">           
            Criar um design é muito mais que montar ou organizar, é adicionar valor e significado, é iluminar, simplificar, clarificar, dramatizar, persuadir e até divertir. Criar um design é transformar prosa em poesia - <strong>Paul Rand</strong> <i class="fas fa-quote-right red-quote-right"></i></p>            
        </div>

        <img src = "../assets/images/avatar.png" class = "avatar" />       

        <div class = "container-right">
            <p class = "about-me">Olá,<br> sou <strong>Rodrigo Oliveira da Silva</strong>, desenvolvedor frontend, precisa de uma solução para web? Entre em contato e transformaremos a sua ideia em realidade.</p>

            <ul class = "service-list">
                <li><i class="fas fa-check-circle red-check"></i>Websites</li>
                <li><i class="fas fa-check-circle red-check"></i>Landing Pages</li>
                <li><i class="fas fa-check-circle red-check"></i>Single Page Applications</li>
            </ul>         
        </div>
    </div>
</template>

<script>
export default {
    name:'Skills',
    data() {
        return {

        }
    }
}
</script>
    
<style scoped>
   .container {
        width: 100%;
        max-width: 1500px;
        background-color: var(--palleteGrey);
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }

    .container-left {
        width: 30%;
        display: flex;
    }

    .container-left strong {
        font-family: "Montserrat";
        color: var(--palleteRed);
    }

    .container-right {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .avatar {
        width: 250px;
        height: 250px;
        border: 1px solid var(--palleteBlack);        
        border-radius: 300px;
        box-shadow: 0px 0px 5px var(--palleteWhite);
    }

    .about-me::first-line {
        color: var(--palleteRed);
        font-size: 50px;   
        line-height: 50px;    
    }

    .about-me {
        color: var(--palleteWhite);
        font-size: 15px;
        line-height: 25px;
        width: 100%;
        font-family: "Montserrat";
        margin-bottom: 15px;
    }

    .about-me strong {
        font-family: "Montserrat";
    }

    .service-list {
        list-style-type: none;
        width: 100%;
    }

    .service-list li {
        color: var(--palleteWhite);
        font-size: 25px;
        margin-bottom: 10px;        
    }

    .red-check {
        color: var(--palleteRed);
        margin-right: 15px;
        font-size: 25px;
    }

    .quote {
        color: var(--palleteWhite);
        font-size: 15px;
        font-style: italic;
        font-family: "Montserrat";
        line-height: 25px;
    }

    .red-quote-left {
        font-size: 20px;
        color: var(--palleteRed);
        margin-right: 5px;
    }

    .red-quote-right {
        font-size: 20px;
        color: var(--palleteRed);
        align-self: flex-end;
        margin-left: 5px;
    }

    @media (max-width: 450px) {
        .container {
            flex-direction: column;
            align-items: center;
        }

        .container-left {
            width: 100%;
            order: 3;
        }

        .container-right {
            width: 100%;
            margin: 30px 0px;
        }
    }

    @media (min-width: 450px) and (max-width: 800px) {
        .avatar {
            width: 175px;
            height: 175px;
        }

        .container-left {
            width: 35%;
        }

        .container-right {
            width: 35%;
        }
    }
</style>