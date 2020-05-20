import React from 'react'
import ImageUploader from 'react-images-upload'
import styled from 'styled-components/macro'

export default function Uploader({ setFormData, formData }) {
  return (
    <ContentWrapper>
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
        fileContainerStyle={{}}
      />
    </ContentWrapper>
  )
}
const ContentWrapper = styled.div`
  .fileContainer {
    margin-top: -20px;
    background: transparent;
    height: 60px;
    box-shadow: none;
    margin-top: '-30px';
  }

  .chooseFileButton {
    background: #fd474b;
    border-radius: 5px;
    font-size: 12pt;
    font-family: 'Rajdhani', sans-serif;
  }
`
