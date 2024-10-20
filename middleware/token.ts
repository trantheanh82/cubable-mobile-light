// import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app"

export default defineNuxtRouteMiddleware((to)=>{
    const userToken = getCookie('accessToken')
    if(!userToken){
        return navigateTo('/login')
    }

    return navigateTo('/')
})

