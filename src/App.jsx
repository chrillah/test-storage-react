import { useState, useEffect } from 'react'
import { storage } from './firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
import './App.css'

function App() {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([])
    const imageListRef = ref(storage, 'images/')

    const uploadImage = () => {
        if (imageUpload === null) {
            return
        } else {
            const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
            uploadBytes(imageRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
                alert('image uploaded')
            })
        }
    }

    useEffect(() => {
        setImageList([])
        listAll(imageListRef).then((resp) => {
            resp.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])

    return (
        <>
            <div className="upload-shit">
                <input
                    type="file"
                    onChange={(event) => {
                        setImageUpload(event.target.files[0])
                    }}
                />
                <button onClick={uploadImage}>Upload</button>

                <div className="list-container">
                    {imageList.map((url, index) => (
                        <img key={index} src={url} alt="bilder" />
                    ))}
                </div>
            </div>
        </>
    )
}

export default App
