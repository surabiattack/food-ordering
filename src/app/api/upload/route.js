import * as Minio from "minio";
import uniqid from "uniqid";
export async function POST(req) {
    const data = await req.formData();
    if (data.get('file')) {
        // upload the file
        const file = data.get('file');
        const minioClient = new Minio.Client({
            endPoint: 'localhost',
            port: 9000,
            useSSL: false,
            accessKey: process.env.MINIO_ACCESS_KEY,
            secretKey: process.env.MINIO_SECRET_KEY,
        });
        // Destination bucket
        const bucket = 'food-ordering';
        // Check if the bucket exists
        // If it doesn't, create it
        const exists = await minioClient.bucketExists(bucket)
        if (exists) {
            console.log('Bucket ' + bucket + ' exists.')
        } else {
            await minioClient.makeBucket(bucket)
            console.log('Bucket ' + bucket + ' created')
        }

        // Upload the file with fPutObject
        const ext = file.name.split('.').slice(-1)[0];
        const newFileName = uniqid() + '.' + ext;

        const chunks = [];
        for await (const chunk of file.stream()) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);

        const result = await minioClient.putObject(bucket, newFileName, buffer, );
        const link = 'http://127.0.0.1:9000/'+ bucket+'/' + newFileName;
        return Response.json(link);
    }
    return Response.json(true);
}