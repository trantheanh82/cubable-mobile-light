import { createRouter, defineEventHandler, readBody, useBase, getCookie,parseCookies, getQuery } from 'h3';

const router = createRouter();
const apiEndPoint = "https://open.cubable.com/api/v1/"

router.get(
    '/detail', defineEventHandler(async (event)=>{
        const cookie = parseCookies(event)
        const query = getQuery(event)

        const baseDetail = await $fetch(`${apiEndPoint}tables?baseID=${query.baseID}`,{
            method: 'GET',
            headers: {
                authorization: `Bearer ${cookie.accessToken}`,
                contentType: 'applications/json'
            }
        })

        return {
                message: 'successful',
                data: baseDetail
              }
    })
)


export default useBase('/api/cubable/base', router.handler);