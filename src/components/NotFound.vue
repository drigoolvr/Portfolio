<template>
    <div class = "container">
        <p>Página não encontrada</p>
        <p>Erro 404</p>
    </div>
</template>

<script>
export default {
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
       height: 500px;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
   }

   p {
       font-weight: bold;
       color: var(--palleteWhite);
       font-size: 60px; 
   }
</style>