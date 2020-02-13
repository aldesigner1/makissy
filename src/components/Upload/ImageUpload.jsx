import React, { Component } from "react";
import { storage } from "../Firebase/firebase";

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleChange = event => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      this.setState({ image });
    }
  };

  handleUploadImage = event => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    // uploadTask.on('state_changed', progress, error, complete)
    uploadTask.on(
      "state_changed",
      snap => {
        //progress function
        const progress = Math.round(
          (snap.bytesTransferred / snap.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        //error function
        console.log(error);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  render() {
    const style = {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    };

    return (
      <div style={style}>
        <progress value={this.state.progress} max='100' />
        <br />
        <input type='file' onChange={this.handleChange} />
        <button onClick={this.handleUploadImage}> Upload </button>
        <br />
        <img
          src={this.state.url || "http://via.placeholder.com/400x300"}
          alt={this.state.image}
          height='300rem'
          width='400rem'
        />
      </div>
    );
  }
}
