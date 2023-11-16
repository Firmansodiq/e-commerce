
import type { CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'


declare const inlineConfig = {
  "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYWV0Y2hhYWZmenN4dmtnaXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMzY5NDIsImV4cCI6MjAxNTcxMjk0Mn0.9sMg3mrjgJyWMdrNJsJOAVEKR8W23fGb_EAz8C_0J2Q",
  "baseUrl": "https://lraetchaaffzsxvkgiyx.supabase.co",
  "secretKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYWV0Y2hhYWZmenN4dmtnaXl4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDEzNjk0MiwiZXhwIjoyMDE1NzEyOTQyfQ.146RNoZBjYu7Z7tJgBg8WCsQL9BOSvi1wO0JPGMsuls",
  "storageUrl": "https://lraetchaaffzsxvkgiyx.supabase.co/storage/v1",
  "baseStorageUrl": "https://lraetchaaffzsxvkgiyx.supabase.co/storage/v1/object/public/",
  "nuxt": {}
}
type ResolvedAppConfig = Defu<typeof inlineConfig, []>
type IsAny<T> = 0 extends 1 & T ? true : false

type MergedAppConfig<Resolved extends Record<string, unknown>, Custom extends Record<string, unknown>> = {
  [K in keyof (Resolved & Custom)]: K extends keyof Custom
    ? unknown extends Custom[K]
      ? Resolved[K]
      : IsAny<Custom[K]> extends true
        ? Resolved[K]
        : Custom[K] extends Record<string, any>
            ? Resolved[K] extends Record<string, any>
              ? MergedAppConfig<Resolved[K], Custom[K]>
              : Exclude<Custom[K], undefined>
            : Exclude<Custom[K], undefined>
    : Resolved[K]
}

declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
