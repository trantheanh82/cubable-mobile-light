import { createRouter, defineEventHandler, readBody, useBase, parseCookies } from 'h3';
import { useRuntimeConfig } from 'nuxt/app'

const router = createRouter();
const runtimeConfig = useRuntimeConfig()

router.post(
    '/access-token',defineEventHandler(async (event)=>{
        const body = await readBody(event)
        return {message: JSON.parse(body)}
    })
)

router.get(
    '/get-bases', defineEventHandler(async (event)=>{
        const cookie = parseCookies(event)

        const bases = await $fetch(`${runtimeConfig.public.API_ENDPOINT}bases`,{
            method: 'GET',
            headers: {
                authorization: `Bearer ${cookie.accessToken}`,
                contentType: 'applications/json'
            }
        })

        return {
                'bases': bases
              }
    })
)


export default useBase('/api/cubable/', router.handler);