import S3 from 'aws-sdk/clients/s3.js';
import fs from 'fs';
import util from 'util';

const unlinkFile = util.promisify(fs.unlink);
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
})

//upload function
const uploadFileS3 = (file) => {
    const fileStream = fs.createReadStream(file.path);
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename,
    }
    return s3.upload(uploadParams).promise()
}

//downloadFile
const downloadFileS3 = (fileKey) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }
    return s3.getObject(downloadParams).createReadStream();
}

const handleUpload = async (file) => {
    try {
        const result = await uploadFileS3(file);
        await unlinkFile(file.path);
        return result.Key;
    } catch(e) {
        console.log("Cannot upload file");
    }
}

export { handleUpload, downloadFileS3 }