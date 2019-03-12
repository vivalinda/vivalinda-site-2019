const axios = require('axios')

const baseURL = 'https://api.instagram.com/v1/users/self/media/recent/'
//const numOfPics = '12'
const INSTA_TOKEN='2025866324.1677ed0.3b9fcabd94e04d678fe4a8fbc95d79c6'
 
const getInstagramFeedData= async (numOfPics) => {
  try {
    return await axios.get(`${baseURL}?access_token=${INSTA_TOKEN}&count=${numOfPics}&callback=?`)
  } catch (error) {
    console.error(error)
  }
}

const logPhotos = async (numOfPics) => {
  const feedData = await getInstagramFeedData(numOfPics)
  return  feedData.data.data.map( photo => photo.images.standard_resolution.url )
}

export default logPhotos
