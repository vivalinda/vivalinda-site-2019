import React, { useState, useEffect } from 'react'
import './App.css';

const axios = require('axios')

const baseURL = 'https://api.instagram.com/v1/users/self/media/recent/'
const INSTA_TOKEN = '2025866324.1677ed0.3b9fcabd94e04d678fe4a8fbc95d79c6'

const getInstagramFeedData = async numOfPics => {
  try {
    return await axios.get(`${baseURL}?access_token=${INSTA_TOKEN}&count=${numOfPics}&callback=?`)
  } catch (error) {
    console.error(error)
  }
}

const AppPhoto = () => {
  const [feed, setFeed] = useState([])

  useEffect(() => {
    const logPhotos = async numOfPics => {
      const feedData = await getInstagramFeedData(numOfPics)
      console.log(feedData.data.data)
      return feedData.data.data.map(photo => photo)
    }
    logPhotos(12).then(value => setFeed(value))
  }, [])

  return (
    <>
      <div className="row no-gutters photoContainer">
        {feed.map((photo, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i} >
            <a href={photo.link}>
              <img className="photoCard"   alt="foto-instagram" src={photo.images.standard_resolution.url} />
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default AppPhoto

/*
class AppPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: []
    };
}
componentDidMount() {
    this.props.promise.then(value => {
        this.setState({ value });
    });
  }


  render() {
    return (
      <>
      <div>
        <img className="principal" src="./static/viva.jpg" alt="Foto Outono" />
      </div>
      <div className="row no-gutters photoContainer">
          {
          this.state.value.map( ( item, i ) =>  { 
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i} >
                  <img className="photoCard"   alt="" src={item} />
              </div>
          )
          })
        }
      </div>
      </>
    )
  }
}


export default AppPhoto;
*/