<template>
    <div>
        <CabecalhoPagina />
        <h1>Parte 3</h1>
        <h2>Utilizando computed em composition api</h2>
        <div>
            <div class="divcol2">
                <h3>Exibir perfil e setor de usuário separadamente. Ex: 5</h3>
                Perfil: {{ usuario1.perfil }}
                <br>
                Setor: {{ usuario1.setor }}
                <br>
                <button @click="usuario1.perfil='Gerente'" type="button">Mudar Perfil </button> <span></span>
                <button @click="usuario1.setor='Manutenção'" type="button">Mudar Setor</button>
            </div>
            <div class="divcol2">
                <h3>Exibir perfil e setor de usuário utilizando computed. Ex: 6</h3>
                {{ unirPefilESetor }}
            </div>
        </div>
        <br><br>
        <hr>
        <h1>Parte 4</h1>
        <h2>Utilizando watch em composition api</h2>
        <div>
            <p>watch (usuario1, () => {})</p>
        </div>
        <hr><hr>
    </div>
</template>

<script>
import {ref, computed, watch} from 'vue'
import CabecalhoPagina from './CabecalhoPagina.vue'

export default {
    setup() {
        const usuario1 = ref({
            perfil: "Administrador",
            setor: "Desenvolvimento"
        });
        const usuario2 = ref({
            perfil: "Usuario Comum",
            setor: "Desenvolvimento"
        });
        const unirPefilESetor = computed(() => {
            return `Perfil: ${usuario1.value.perfil} e Setor: ${usuario1.value.setor}`;
        });
        watch(usuario1, () => {
            console.log(usuario1);
        }, {
            deep: true
        });
        return {
            usuario1,
            usuario2,
            unirPefilESetor,
        };
    },
    components: { CabecalhoPagina }
}
</script>

<style>
.divcol2 {
  width: 50%;
  min-width: 250px;
  display: inline-block;
  vertical-align: top;
}
</style>