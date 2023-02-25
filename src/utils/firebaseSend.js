import { storage } from "./firebase"
export let COME_IMAGE = ""

export const SEND = (image) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
        () => storage.ref('images').child(image.name).getDownloadURL()
            .then(fireBaseUrl => COME_IMAGE = fireBaseUrl)
            .catch(err => console.log(err))
        )
}
