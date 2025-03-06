/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ManageIndexImport } from './routes/manage_.index'
import { Route as ManageResetImport } from './routes/manage_.reset'
import { Route as ManageLoginImport } from './routes/manage_.login'
import { Route as ManageFormImport } from './routes/manage_.form'
import { Route as ManageFormFormSlugImport } from './routes/manage_.form_.$formSlug'

// Create/Update Routes

const ManageIndexRoute = ManageIndexImport.update({
  id: '/manage_/',
  path: '/manage/',
  getParentRoute: () => rootRoute,
} as any)

const ManageResetRoute = ManageResetImport.update({
  id: '/manage_/reset',
  path: '/manage/reset',
  getParentRoute: () => rootRoute,
} as any)

const ManageLoginRoute = ManageLoginImport.update({
  id: '/manage_/login',
  path: '/manage/login',
  getParentRoute: () => rootRoute,
} as any)

const ManageFormRoute = ManageFormImport.update({
  id: '/manage_/form',
  path: '/manage/form',
  getParentRoute: () => rootRoute,
} as any)

const ManageFormFormSlugRoute = ManageFormFormSlugImport.update({
  id: '/manage_/form_/$formSlug',
  path: '/manage/form/$formSlug',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/manage_/form': {
      id: '/manage_/form'
      path: '/manage/form'
      fullPath: '/manage/form'
      preLoaderRoute: typeof ManageFormImport
      parentRoute: typeof rootRoute
    }
    '/manage_/login': {
      id: '/manage_/login'
      path: '/manage/login'
      fullPath: '/manage/login'
      preLoaderRoute: typeof ManageLoginImport
      parentRoute: typeof rootRoute
    }
    '/manage_/reset': {
      id: '/manage_/reset'
      path: '/manage/reset'
      fullPath: '/manage/reset'
      preLoaderRoute: typeof ManageResetImport
      parentRoute: typeof rootRoute
    }
    '/manage_/': {
      id: '/manage_/'
      path: '/manage'
      fullPath: '/manage'
      preLoaderRoute: typeof ManageIndexImport
      parentRoute: typeof rootRoute
    }
    '/manage_/form_/$formSlug': {
      id: '/manage_/form_/$formSlug'
      path: '/manage/form/$formSlug'
      fullPath: '/manage/form/$formSlug'
      preLoaderRoute: typeof ManageFormFormSlugImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/manage/form': typeof ManageFormRoute
  '/manage/login': typeof ManageLoginRoute
  '/manage/reset': typeof ManageResetRoute
  '/manage': typeof ManageIndexRoute
  '/manage/form/$formSlug': typeof ManageFormFormSlugRoute
}

export interface FileRoutesByTo {
  '/manage/form': typeof ManageFormRoute
  '/manage/login': typeof ManageLoginRoute
  '/manage/reset': typeof ManageResetRoute
  '/manage': typeof ManageIndexRoute
  '/manage/form/$formSlug': typeof ManageFormFormSlugRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/manage_/form': typeof ManageFormRoute
  '/manage_/login': typeof ManageLoginRoute
  '/manage_/reset': typeof ManageResetRoute
  '/manage_/': typeof ManageIndexRoute
  '/manage_/form_/$formSlug': typeof ManageFormFormSlugRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/manage/form'
    | '/manage/login'
    | '/manage/reset'
    | '/manage'
    | '/manage/form/$formSlug'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/manage/form'
    | '/manage/login'
    | '/manage/reset'
    | '/manage'
    | '/manage/form/$formSlug'
  id:
    | '__root__'
    | '/manage_/form'
    | '/manage_/login'
    | '/manage_/reset'
    | '/manage_/'
    | '/manage_/form_/$formSlug'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  ManageFormRoute: typeof ManageFormRoute
  ManageLoginRoute: typeof ManageLoginRoute
  ManageResetRoute: typeof ManageResetRoute
  ManageIndexRoute: typeof ManageIndexRoute
  ManageFormFormSlugRoute: typeof ManageFormFormSlugRoute
}

const rootRouteChildren: RootRouteChildren = {
  ManageFormRoute: ManageFormRoute,
  ManageLoginRoute: ManageLoginRoute,
  ManageResetRoute: ManageResetRoute,
  ManageIndexRoute: ManageIndexRoute,
  ManageFormFormSlugRoute: ManageFormFormSlugRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/manage_/form",
        "/manage_/login",
        "/manage_/reset",
        "/manage_/",
        "/manage_/form_/$formSlug"
      ]
    },
    "/manage_/form": {
      "filePath": "manage_.form.tsx"
    },
    "/manage_/login": {
      "filePath": "manage_.login.tsx"
    },
    "/manage_/reset": {
      "filePath": "manage_.reset.tsx"
    },
    "/manage_/": {
      "filePath": "manage_.index.tsx"
    },
    "/manage_/form_/$formSlug": {
      "filePath": "manage_.form_.$formSlug.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
