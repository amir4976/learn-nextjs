export function GET () {
    return Response.json({
        message: "Hello World"
    })
}


export async function  POST (req) {
    const reqBody = await req.json();
    console.log(reqBody)
    return Response.json({
        message: reqBody
    })
}
