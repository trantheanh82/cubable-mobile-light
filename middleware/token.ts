export default defineNuxtRouteMiddleware((to, from)=>{    
    const token = useCookie('accessToken')
    console.log('token',token.value === "")
    if(!token.value){
        return navigateTo('/login')
    }

    //return navigateTo('/')
})