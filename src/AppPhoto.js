import React, { Component } from 'react';
import './App.css';

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
