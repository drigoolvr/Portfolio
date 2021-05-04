<template>
    <div class = "container">
        <header>
            <div class = "container-left">
                <div class = "logo-area">
                    <p>Oliv<span>Dev</span></p>
                    <pre>Frontend Developer</pre>
                </div>

                <div class = "social-media-area">
                    <a href = "https://www.linkedin.com/in/rodrigo-oliveira-51ba761b4/" target = "_blank"><i class="fab fa-linkedin social-icon"></i></a>
                    <a href = "https://github.com/drigoolvr?tab=repositories" target = "_blank"><i class="fab fa-github-square social-icon"></i></a>
                </div>
            </div>            

            <nav class = "menu">
                <ul>
                    <li @click = "scrolling('#id-about')">Sobre</li>
                    <li @click = "scrolling('#id-skills')">Habilidades</li>
                    <li @click = "scrolling('#id-portfolio')">Portfólio</li>
                    <li @click = "scrolling('#id-contact')">Contato</li>
                </ul>
            </nav>

            <div class = "menu-toggle">
                <i class="fas fa-bars" id = "menu-toggle-button" @click = "openMenu()"></i>
            </div>
        </header>

        <div class = "menu-mobile">
            <ul>
                <li><i class="fas fa-times" id = "menu-toggle-button" @click = "closeMenu()"></i></li>
                <br>
                <li @click = "scrolling('#id-about')">Sobre</li>
                <li @click = "scrolling('#id-skills')">Habilidades</li>
                <li @click = "scrolling('#id-portfolio')">Portfólio</li>
                <li @click = "scrolling('#id-contact')">Contato</li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name:'Header',
    data() {
        return {

        }
    },
    methods: {
        openMenu: function() {            
            document.querySelector(".menu-mobile").style.left = "40%";            
        },
        closeMenu: function() {
            document.querySelector(".menu-mobile").style.left = "100%";
        },
        scrolling: function(id) {  
           document.querySelector(".menu-mobile").style.left = "100%";                  
           if(this.$route.name == 'home') {
                if(id != '#id-about') {
                    let el = document.querySelector(id);
                    let coord = el.getBoundingClientRect();
                    coord = coord.top + window.scrollY;
                    document.querySelector('html').scroll({
                        top: coord,
                        left: 0,
                        behavior: 'smooth'
                    });                 
                }
                
           } else {
               this.$emit('btnReturn', id);
           }                   
        }     
    }
}
</script>
    
<style scoped>
   .container {
        width: 100%;
        max-width: 1500px;
        height:fit-content;
        background-color: var(--palleteGrey);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .container-left {
        display: flex;
        align-items: center;
    }

    header {
        width: 100%;  
        height: fit-content;      
        display: flex;
        justify-content: space-between;
        align-items: center;         
    }

    .logo-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
    }

    .logo-area p {
        color: var(--palleteRed);
        font-size: 45px;
        text-shadow: 3px 3px 0px black;
        font-weight: bold;
        line-height: 45px;
    }

    .logo-area span {
        color: var(--palleteWhite);
        font-size: 45px;
        text-shadow: 3px 3px 0px black;
        font-weight: bold;
        line-height: 45px;
    }

    .logo-area pre {
        color: var(--palleteWhite);
        font-size: 20px;
        text-shadow: 3px 3px 0px black;
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

    nav,
    nav ul {
        display: flex;
    }

    .menu ul li {
        color: var(--palleteWhite);
        font-size: 25px;
        list-style-type: none;
        margin: 0px 10px;
        transition: all 0.5s ease;
        cursor: pointer;
        position: relative;
        padding: 5px;
        z-index: 150;
    }

    .menu ul li::before {
        content: '';
        position: absolute;
        top: -2px;
        left: 0;
        width: 100%;
        height: 0%;
        background-color: var(--palleteRed);
        z-index: -150;
        transition: all 0.5s ease;
        visibility: hidden; 
        border-radius: 15px 5px 15px 5px;
        transform:rotate(-7deg);
        box-shadow: 0px 0px 15px var(--palleteRed); 
    }

    .menu ul li:hover:before {
        height: 100%;
        visibility: initial;
    }

    .menu ul li:hover {
        color: var(--palleteGrey);
        font-weight: bold;
    }

    .menu-toggle {
        display: none;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
    }

    #menu-toggle-button {
        font-size: 40px;
        cursor: pointer;
        outline: none;
        border: none;
        color: var(--palleteWhite);
        text-shadow: 0px 0px 10px var(--palleteBlack);
        transition: all 0.5s ease;
    }

    #menu-toggle-button:hover {
        color: var(--palleteRed);
    }

    .menu-mobile {
        position:fixed;
        left: 100%;
        top: 0px;
        width: 60%;
        height: 100%;
        transition: all 0.5s ease;
        display: flex;
        justify-content: center;  
        background-color: var(--palleteGrey);  
        padding: 20px 0px; 
        border-left: 1px solid var(--palleteWhite);   
        z-index: 150;    
    }

    .menu-mobile ul {
        list-style-type: none;
        width: 100%;
        padding: 10px 0px;
                
    }

    .menu-mobile ul li {
        text-align: center;
        color: var(--palleteWhite);
        font-size: 25px;
        list-style-type: none;
        margin-bottom: 20px;
        transition: all 0.5s ease;
        cursor: pointer;
        text-shadow: 0px 0px 10px var(--palleteBlack);
    }

    .menu-mobile ul li:hover {
        color: var(--palleteRed);
    }

    @media (max-width:450px) {
        .logo-area p,
        .logo-area span {
            font-size: 40px;
            line-height: 40px;
        }

        .logo-area pre {
            font-size: 15px;
            line-height: 15px;
        }

        nav {
            display: none;
        }

        .menu-toggle {
            display: flex;
        }

        #menu-toggle-button:hover {
            color: var(--palleteWhite);
        }
    }

    @media (min-width: 1500px) {
		.container {
			border-left: 1px solid white;
			border-right: 1px solid white;
		}
	}
</style>