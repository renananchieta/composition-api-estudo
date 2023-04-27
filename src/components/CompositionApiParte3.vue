<template>
    <div>
        <h1>Parte 5</h1>
        <h2>Ciclo de vida em composition api</h2>
        <h3>Verificar no console o ciclo de vida.</h3>

    </div>
</template>

<script>
import { 
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted
 } from 'vue'

export default{
    setup() {
        onBeforeMount( () => {
            console.log('onBeforeMount');
        })

        onMounted( () => {
            console.log('onMounted');
        })

        onBeforeUnmount(() => {
            console.log('onBeforeUnmount');
        })

        onUnmounted(() => {
            console.log('onUnmounted')
        })

    }
}
</script>

<style>

</style>