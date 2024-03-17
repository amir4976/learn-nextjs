export function GET (req) {
    const token = req.cookies.get('token')
    console.log(token)
    return Response.json({
        message: "Hello World"+token
    })
}


export async function  POST (req) {
    const reqBody = await req.json();
    console.log(reqBody)

    return Response.json({
        message: reqBody
    },{
        status: 201,
        headers: {
            'Set-Cookie': 'token=123; Max-Age=60'
        },
        httpOnly: true
    })
}
