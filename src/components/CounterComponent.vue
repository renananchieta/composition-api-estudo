<template>
    <v-container>
            <h2> Welcome to Pinia </h2>
            <br>
            {{ counter.showCount }} 
            <br><br>
            <v-btn @click="counter.increment">Increment</v-btn> <br>
            <hr>
            <!-- {{ counter.showCount }} -->
    </v-container>
</template>

<script setup>
import {useCounterStore} from '/src/stores/CounterStore.js';

const counter = useCounterStore();
</script>