import img10 from 'shared/assets/images/image1.png?url'
const name = 'volk'

const Archive = () => {
  return (
    <a href={img10} download={`${name}.jpeg`}>
      Скачать картинку
    </a>
  )
}

export default Archive
