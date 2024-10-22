// import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app"

import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "nuxt/app"

export default defineNuxtRouteMiddleware((to, from)=>{    
    const userToken = useCookie('accessToken')
    
    if(!userToken){
        return navigateTo('/login')
    }

    return navigateTo('/')
})