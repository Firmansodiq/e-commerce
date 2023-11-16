
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/FS Web/e-commerce/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYWV0Y2hhYWZmenN4dmtnaXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMzY5NDIsImV4cCI6MjAxNTcxMjk0Mn0.9sMg3mrjgJyWMdrNJsJOAVEKR8W23fGb_EAz8C_0J2Q",
  "baseUrl": "https://lraetchaaffzsxvkgiyx.supabase.co",
  "secretKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYWV0Y2hhYWZmenN4dmtnaXl4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDEzNjk0MiwiZXhwIjoyMDE1NzEyOTQyfQ.146RNoZBjYu7Z7tJgBg8WCsQL9BOSvi1wO0JPGMsuls",
  "storageUrl": "https://lraetchaaffzsxvkgiyx.supabase.co/storage/v1",
  "baseStorageUrl": "https://lraetchaaffzsxvkgiyx.supabase.co/storage/v1/object/public/",
  "nuxt": {}
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
