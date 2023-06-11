import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import fs from 'fs';
import util from 'util';

const unlinkFile = util.promisify(fs.unlink);
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey
    }
})

//upload function
const uploadFileS3 = (file, key) => {
    const fileStream = fs.createReadStream(file.path);
    const uploadParams = new PutObjectCommand({
        Bucket: bucketName,
        Body: fileStream,
        Key: key,
    })
    return s3.send(uploadParams)
}

//downloadFile
const downloadFileS3 = (fileKey) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }
    return s3.getObject(downloadParams).createReadStream();
}
const getFileUrl = async (key) => {

}

const handleUploadAvatar = async (file, key) => {
    try {
        const result = await uploadFileS3(file, key);
        unlinkFile(file.path);
    } catch(e) {
        console.log(e);
    }
}

export { handleUploadAvatar, downloadFileS3 }