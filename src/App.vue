<template>
  <v-app>
    <div >
      <v-toolbar dark prominent>
        <v-app-bar>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>Operações Testes</v-toolbar-title>

          <v-btn variant="text" icon="mdi-magnify"></v-btn>

          <v-btn variant="text" icon="mdi-filter"></v-btn>

          <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
        </v-app-bar>

        <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://lh3.googleusercontent.com/ogw/AOLn63EBV1hKQrP0zQ1yclYdb8603HE1ceg85-0YlA_EH5Q=s32-c-mo"
          title="Renan Anchieta"
          nav
        >
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <a href="/parte1">Pagina 1</a>
        </v-list-item>
        <v-list-item>
          <a href="/parte2">Pagina 2</a>
        </v-list-item>
        <v-list-item>
          <a href="/parte3">Pagina 3</a>
        </v-list-item>
        <v-list-item>
          <a href="/parte4">Pagina 4</a>
        </v-list-item>
        <v-list-item>
          <a href="/CounterComponent">Counter</a>
        </v-list-item>
        
      </v-navigation-drawer>

      </v-toolbar>
    </div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: true,
    rail: false,
    ListaMenu: [
      { 
        text: 'Pagina 1',
        href: '/src/components/CompositionApiParte1.vue',
      }
    ],
  }),

  watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>
