import React from 'react'
import axios from 'axios';

export default class index extends React.Component {

    state = {
        selectedFile: null
    }
    FileSelectedHandler = (evt) => {
        console.log(evt.target.files[0]);
        this.setState({ selectedFile: evt.target.files[0] });
    }

    FileLoadHandler = (evt) => {
        console.log();
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('https://console.firebase.google.com/u/1/project/makissy-b2e19/functions/list', fd, {
            onUploadProgress: progressEvent => {
                console.log("Upload Progress:" + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%');

            }
        })
            .then(res => {
                console.log(res);

            })
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.FileSelectedHandler} />
                <button onClick={this.FileLoadHandler}>UPLOAD</button>
            </div >
        )
    }
}
