<template>
    <div>
        <h1>Parte 6</h1>
        <h2>Propriedades, Eventos e Contexto do Component em composition api</h2>
        <div>
            <button @click="sendData">
                {{ variant }}
                <slot></slot>
                <slot name="Exemplo1"></slot>
                <slot name="Exemplo2"></slot>
                <slot name="Exemplo3"></slot>
            </button>
        </div>
        <hr><hr>
    </div>
</template>

<script>
export default{
    props: {
        variant:{
            type: String,
            default: 'Success',
        },
    },
    setup(props, { emit }) {
        const sendData = () => {
            emit('update', true)
        }

        return {
            sendData,
        }
    }
}
</script>

<style>

</style>