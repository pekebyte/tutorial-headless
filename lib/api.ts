
const WPURL = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}` || "";

async function fetchAPI(endpoint: string)
{
    const headers = {'Content-Type': 'application/json'};
    const res = await fetch(`${WPURL}/${endpoint}`, {headers});

    if (!res.ok) {
        console.log(`Error al consultar ${endpoint}`, res.statusText);
        throw new Error(`Error al consultar ${endpoint}`)
    }

    return res.json();
}

export async function fetchPosts() : Promise<any> {
    const data = await fetchAPI('posts');
    return data;
}

export async function fetchPost(slug: string) : Promise<any> {
    const data = await fetchAPI(`posts?slug=${slug}`);
    if (data.length > 0) {
        return data[0];
    } else {
        return {};
    }
}