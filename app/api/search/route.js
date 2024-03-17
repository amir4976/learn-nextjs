export async function GET(req) {
    //* const {searchParams} = new URL(req.url);        //first way
    const searchParams = req.nextUrl.searchParams;  //socend way
    const type = searchParams.get('type');
    const min = searchParams.get('min');
    
    return Response.json({
        message: {type,min}
    })
}
