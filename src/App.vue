<template>

  <CompositionApiParte1 />
  <CompositionApiParte2/>
  <CompositionApiParte3 v-if="mostrarComponente3"/>
  <button @click="mostrarComponente3 = !mostrarComponente3" type="button">Exibir Componente e visualizar o console.log()</button> <br>
  <hr><hr>
  <CompositionApiParte4
    @update="getUpdate"
  >
    Save
    <template #Exemplo1>Exemplo 1</template>
  </CompositionApiParte4>
  <img alt="Vue logo" src="./assets/logo.png">
  <TelaPrincipal msg="Welcome to Your Vue.js App" />
</template>

<script>
import TelaPrincipal from './components/TelaPrincipal.vue'
import CompositionApiParte1 from './components/CompositionApiParte1.vue'
import CompositionApiParte2 from './components/CompositionApiParte2.vue'
import CompositionApiParte3 from './components/CompositionApiParte3.vue'
import CompositionApiParte4 from './components/CompositionApiParte4.vue'
import {ref} from 'vue'

export default {


  name: 'App',
  components: {
    TelaPrincipal,
    CompositionApiParte1,
    CompositionApiParte2,
    CompositionApiParte3,
    CompositionApiParte4,
  },

  setup() {
    const mostrarComponente3 = ref(false)

    const getUpdate = (data) => {
      console.log('getUpdate', data);
    }

    return {
      mostrarComponente3,
      getUpdate,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
