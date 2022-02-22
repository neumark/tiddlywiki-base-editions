// from: https://gist.github.com/EECOLOR/c3079a59ceab9ab00bac6bfbf15047b2
const storage = require('@google-cloud/storage')
const createUuid = require("uuid-v4")

const firebaseProjectName = 'peterneumark-com'
const bucketName = `${firebaseProjectName}.appspot.com`

const bucket = (new storage.Storage()).bucket(bucketName)

const firebaseSaveFile = async (fileName /*, contentType, data*/) => {
  const file = bucket.file(fileName)
  await file.setMetadata({
      metadata: {
          firebaseStorageDownloadTokens: 'baba' // '3bedfd43-1e56-4316-87f8-311056cb7726'
      },
  });
    // let token = metadata.metadata.firebaseStorageDownloadTokens
    // .then(([m]) => ((m || {}).metadata || {}).firebaseStorageDownloadTokens)
    // .then((token = createUuid()) => file.save(data, { validation: 'md5', resumable: false, metadata: { contentType, metadata: { firebaseStorageDownloadTokens: token } } }).then(_ => token))
    // .then(token => getDownloadUrl(fileName, token))
}

function getDownloadUrl(fileName, token) { return `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${fileName}?alt=media&token=${token}` }

firebaseSaveFile('index.html');
