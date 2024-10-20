import { createRouter, defineEventHandler, readBody, useBase, getCookie,parseCookies } from 'h3';

const router = createRouter();
const apiEndPoint = "https://open.cubable.com/api/v1/"

router.post(
    '/access-token',defineEventHandler(async (event)=>{
        const body = await readBody(event)
        return {message: JSON.parse(body)}
    })
)

router.get(
    '/get-bases', defineEventHandler(async (event)=>{
        const cookie = parseCookies(event)

        const bases = await $fetch(`${apiEndPoint}bases`,{
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