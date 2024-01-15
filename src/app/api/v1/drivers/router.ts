// API sample GET endpoint
export async function GET(request: Request) {
    return Response.json({
        statusCode: 200,
        data: {
            message: 'Api version: v1',
            serverTime: new Date()
        }
    }, { status: 500 });
};

// Create driver
export async function POST(request: Request) {

    console.log('POST here: ', request);

    return Response.json({
        statusCode: 200,
        data: {
            message: 'Driver',
            serverTime: new Date()
        }
    }, { status: 500 });
};