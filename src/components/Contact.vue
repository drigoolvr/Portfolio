<template>
    <div class = "container" id = "id-contact">
        <h2>Contato</h2>
        <p class = "contact-text">Resta alguma dúvida? Fique à vontade para entrar em contato, responderei assim que possível.</p>
        <br><br>
        <div class = "content">
            <div class = "container-left">
                <img class = "contact-img" src = "../assets/images/contact-red.svg" />
            </div>

            <div class = "container-right">  
                <div class = "logo-area">
                    <p>Oliv<span>Dev</span></p>
                    <pre>Frontend Developer</pre>
                </div>                 
                <address class = "contact-area">   
                    <p><i id = "email-icon" class="far fa-envelope"></i>drigo_olvr@hotmail.com</p>                  
                    <p><i id = "whatsapp-icon" class="fab fa-whatsapp"></i> (11) 95947-1015</p>
                    <p><i id = "phone-icon" class="fas fa-phone-alt"></i> (11) 2649-6278</p>
                </address>

                <div class = "social-media-area">
                    <a href = "https://www.linkedin.com/in/rodrigo-oliveira-51ba761b4/" target = "_blank"><i class="fab fa-linkedin social-icon"></i></a>
                    <a href = "https://github.com/drigoolvr?tab=repositories" target = "_blank"><i class="fab fa-github-square social-icon"></i></a>
                </div>
            </div>
        </div>
        <br><br>
        <hr style="height:1px;border-width:0;color:#555;background-color:#555">
        <p class = "copyright">Copyright <i class="far fa-copyright icon-copy"></i>2021 OlivDEV</p>
    </div>
</template>

<script>

export default {
    name:'Contact',
    data() {
        return {

        }
    }
}
</script>
    
<style scoped>
   .container {
        width: 100%;
        
        background-color: #060b13;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0px 20px 20px 20px;
        border-top: 2px solid var(--palleteRed);
        overflow: hidden;
    }

    .container hr {
        width: 100%;
        height: 1px;
        margin-bottom: 15px;        
        color: #555;
        background-color: #555;
    }

    .content {
        display: flex;
        justify-content: space-between;
        width: 80%;
        max-width: 1500px;
        margin-bottom: 15px;
    }

    .contact-text {
        color: var(--palleteWhite);
        font-family: "Montserrat";
        font-size: 15px;
        line-height: 25px;
    }

    .contact-img {
        width: 80%;
        height: auto;
    }

    .contact-area p {
        font-style: normal;
    }

    h2 {
        color: var(--palleteWhite);
        font-size: 40px;
        line-height: 40px;
        background-color: var(--palleteRed);
        padding: 5px 30px;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        box-shadow: 0px 0px 20px var(--palleteRed);
        margin-bottom: 30px;
        text-shadow: 2px 2px 0px black;
    }

    .container-left {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .container-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
    }

    .logo-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
    }

    .logo-area p {
        color: var(--palleteRed);
        font-size: 60px;
        text-shadow: 3px 3px 0px black;
        font-weight: bold;
        line-height: 60px;
    }

    .logo-area span {
        color: var(--palleteWhite);
        font-size: 60px;
        text-shadow: 1px 1px 0px var(--palleteGrey);
        font-weight: bold;
        line-height: 60px;
    }

    .logo-area pre {
        color: var(--palleteWhite);
        font-size: 30px;
        text-shadow: 1px 1px 0px black;
    }

    .contact-area {
       display: flex;
       flex-direction: column;
       align-items: center;
       padding: 5px;
   }

   .contact-area #email-icon, 
   .contact-area #whatsapp-icon,
   .contact-area #phone-icon,
   .contact-area p {
       color: var(--palleteWhite);
       font-size: 20px;
       margin-bottom:5px;
   }

   .contact-area #whatsapp-icon,
   .contact-area #phone-icon,
   .contact-area #email-icon {
       margin-right: 5px;
   }

   .social-icon {
       font-size: 40px;
       cursor: pointer;
       outline: none;
       border: none;
       color: var(--palleteRed);
       text-shadow: 0px 0px 10px var(--palleteBlack);
       margin: 0px 5px;
       transition: all 0.5s ease;
    }

    .social-icon:hover {
        color: var(--palleteRedHover);
    }

    .copyright {
        color: #555;
        font-family: "Montserrat";
        font-size: 15px;        
    }

    .icon-copy {
        color: #555;
        font-size: 15px;
    }

    @media (max-width: 450px) {
        .content {
            flex-direction: column;
        }

        .container-right {
            width: 100%;
        }

        .container-left {
            display: none;
        }
    }
</style>