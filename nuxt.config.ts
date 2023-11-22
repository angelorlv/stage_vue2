// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css','primevue/resources/themes/lara-light-green/theme.css'],

  //Meta and SEO
  app: {
    head: {
        title:'Mise en Relation',
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        link:[
            {href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"},
        ]
    }
  },

  nitro: {
    devProxy: {
        "/api": {
            target:"http://localhost:4044/api",
            changeOrigin: true,
            prependPath: true,
        }
    }
  },

  modules: [
    'nuxt-primevue','@pinia/nuxt',
  ],
  primevue: {
    usePrimeVue: true,
    options: {
        unstyled: false,
        ripple: true,
        inputStyle: 'filled'
    },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    components: {
        include: '*',
    },
    directives: {
        include: '*',
    },
    composables: {
        include: "*",
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
