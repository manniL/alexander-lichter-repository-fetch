export default defineNuxtPlugin({
  setup() {
    const api = $fetch.create({
      baseURL: 'https://jsonplaceholder.typicode.com/', // useRuntimeConfig().public.apiBaseUrl
    })

    return {
      provide: {
        api
      }
    }
  }
})