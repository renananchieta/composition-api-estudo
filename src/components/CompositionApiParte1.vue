<template>
  <div>
    <CabecalhoPagina />
    <h1>Parte 1</h1>
    <h2>Utilizando o Reactive do vue.js através de methods em composition api</h2>
    <div>
      <div class="divcol">
        <h3>Exibir nome. Ex: 1</h3>
        {{ usuario1.nome }}
        {{ usuario1.sobrenome }}
      </div>

      <div class="divcol">
        <h3>Exibir nome. Ex: 2</h3>
        {{ usuario2.nome }}
        {{ usuario2.sobrenome }}
      </div>
      <br>
      <h5>Observação: O Reactive só funciona em objetos {}</h5>
      <br>
      <button @click="mudarUsuario()" type="button">Mudar Nomes</button>
      <br>
    </div>

    <hr>

    <h1>Parte 2</h1>
    <h2>Utilizando Ref do vue.js através de methods em composition api</h2>
    <div>
      <div class="divcol">
        <h3>Exibir nome. Ex: 3</h3>
        {{ usuario3.nome }}
        {{ usuario3.sobrenome }}
      </div>

      <div class="divcol">
        <h3>Exibir nome Ex: 4</h3>
        {{ usuario4.nome }}
        {{ usuario4.sobrenome }}
      </div>
      <br>
      <h5>Observação: O Ref funciona em tipos primitivos (strings, numbers, boolean) e objetos {}</h5>
      <br>
      <button @click="mudarUsuario2()" type="button">Mudar Nomes</button>
    </div>

    <h4>Observação importante: Sempre utilizar o Ref do vue.js por causa de certas limitações do Reactive.</h4>
    <hr>
  </div>
</template>

<script>
import CabecalhoPagina from './CabecalhoPagina.vue'
import { ref, reactive } from 'vue'

export default {
  components:{
    CabecalhoPagina
    },
  setup() {
    const usuario1 = reactive({
      nome: 'Renan',
      sobrenome: ''
    })

    const usuario2 = reactive({
      nome: 'Kenne',
      sobrenome: ''
    })

    const usuario3 = ref({
      nome: 'Amanda',
      sobrenome: ''
    })

    const usuario4 = ref({
      nome: 'Beatriz',
      sobrenome: ''
    })

    const mudarUsuario = () => {
      usuario1.nome = ' Renan Gonçalves'
      usuario1.sobrenome = ' Anchieta Pereira'

      usuario2.nome = 'Kenne Priscilla'
      usuario2.sobrenome = 'Barbosa'
    }

    const mudarUsuario2 = () => {
      usuario3.value.nome = 'Amanda Lisboa'
      usuario3.value.sobrenome = 'Cordovil'

      usuario4.value.nome = 'Beatriz Cristina'
      usuario4.value.sobrenome = 'Texeira Alves'
    }

    return {
      usuario1,
      usuario2,
      usuario3,
      usuario4,
      mudarUsuario,
      mudarUsuario2,
    }
  }
}
</script>

<style>
.divcol {
  width: 10%;
  min-width: 250px;
  display: inline-block;
  vertical-align: top;
}
</style>
