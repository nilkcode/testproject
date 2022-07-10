import React from  "react";

class UploadFile extends React.Component {
    uploadFile(e) {
        console.warn(e.target.files);
        const formData = new FormData()
    }


    render(){
        return( 
        <div>
            <h3>Upload Files :: </h3>
            <input type="file" onChange={(e) => this.uploadFile(e)}/>
        </div>
        )
    }
}

export default UploadFile;