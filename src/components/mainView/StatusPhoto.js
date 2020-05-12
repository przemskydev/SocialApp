import { useState } from 'react'
import { app, storage } from '../../config/base'

function useStatusPhoto(initial, status, id) {

  const [values, setValues] = useState(initial)

  function handleChange(e) {
    const file = e.target.files[0];
    const fileType = file.type;
    const typeList = ['image/jpeg', 'image/png'];

    if (file) {
      typeList.includes(fileType) ? setValues({
        ...values,
        image: e.target.files[0]
      }) : console.error('Select image')
    }
  }

  function handleUpload() {

    if (values.image) {
      const uploadTask = storage.ref(`${status}/${id}/${values.image.name}`).put(values.image)
      uploadTask.on('state_changed', snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setValues({
          ...values,
          progress: progress
        })
      },
        error => {
          setValues({
            ...values,
            error: error
          })
        },
        () => {
          storage.ref(`${status}/${id}`)
            .child(values.image.name)
            .getDownloadURL()
            .then(url => {
              setValues({
                ...values,
                url: url
              })
            })
        },
      )
    }

    setValues({
      ...values,
      image: null
    })
  }

  if (values.url) {
    app.firestore()
      .collection(`user`)
      .doc(`${id}`)
      .update({
        "avatar": true,
        "avatarPhoto": values.image.name
      });
  }

  return { values, handleChange, handleUpload }
}


export default useStatusPhoto;