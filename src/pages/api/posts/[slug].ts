import type { APIRoute } from "astro";
import { getEntry } from "astro:content";

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {

    // params.slug;
    // const slug = params.slug;
    const { slug } = params;

    const post = await getEntry('blog', slug as any);

    if (!post) {
        return new Response( JSON.stringify({message: "Post not found"}), {
            status: 404,
            headers: {
                "content-type": "application/json",
            },
        });
    }

    return new Response( JSON.stringify(post),
        {
            status: 200,
            headers: {
                "content-type": "application/json",
            },
        });
}


//para insertar data.
export const POST: APIRoute = async ({ params, request }) => {

    const body = await request.json();

    return new Response( JSON.stringify({
        ...body,
        Method: "POST",
    }), {
        status:200,
        headers: {
            "content-type": "application/json",
        },
    });
}

//PUT es para actualizar data, remplaza todo el objeto.
export const PUT: APIRoute = async ({ params, request }) => {

    const body = await request.json();

    return new Response( JSON.stringify({
        ...body,
        Method: "PUT",        
    }), {
        status:200,
        headers: {
            "content-type": "application/json",
        },
    });
}

//PATCH es para actualizar data, solo manda lo que cambia
export const PATCH: APIRoute = async ({ params, request }) => {

    const body = await request.json();

    return new Response( JSON.stringify({
        ...body,
        Method: "PATCH",        
    }), {
        status:200,
        headers: {
            "content-type": "application/json",
        },
    });
}

//DELETE es para eliminar data.
export const DELETE: APIRoute = async ({ params, request }) => {

    const { slug } = params;

    return new Response( JSON.stringify({
        Method: "DELETE",   
        slug: slug,     
    }), {
        status:200,
        headers: {
            "content-type": "application/json",
        },
    });
}