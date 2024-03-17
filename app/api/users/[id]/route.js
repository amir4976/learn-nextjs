export async function GET(req,{params}) {
    
    console.log(params)
    return Response.json({
        message: "Hello World "+ params.id
    })
}