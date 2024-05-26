/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/connexion/': RouteRecordInfo<'/connexion/', '/connexion', Record<never, never>, Record<never, never>>,
    '/reminder/': RouteRecordInfo<'/reminder/', '/reminder', Record<never, never>, Record<never, never>>,
    '/reminder/[id]': RouteRecordInfo<'/reminder/[id]', '/reminder/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
  }
}
