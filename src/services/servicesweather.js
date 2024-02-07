
import { json } from '@sveltejs/kit'

export async function getweatherFrom(query = 'managua') {
    return fetch('/api/get/{+page.server.js}?q='+query).then((res) => res.json())
}