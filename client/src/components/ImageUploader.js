import React from 'react'
import ImageUploader from 'react-images-upload'

export default function Uploader({ setFormData, formData }) {
  return (
    <ImageUploader
      withIcon={false}
      onChange={(m, f) => setFormData({ ...formData, image: f[0] })}
      maxFileSize={5242880}
      singleImage={true}
      imgExtension={['.jpg', '.gif', '.png', '.gif']}
      maxFileSize={5242880}
      accept="image/*"
      label=""
      buttonText="upload image"
      buttonStyles={{
        background: '#fd474b',
        'border-radius': '5px',
        'font-size': '12pt',
        'font-family': 'Rajdhani',
      }}
      fileContainerStyle={{
        background: 'transparent',
        height: '60px',
        'box-shadow': 'none',
        'margin-top': '-30px',
      }}
    />
  )
}
