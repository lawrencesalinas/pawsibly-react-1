import React from 'react'

function ImageUpload() {

   const  fileSelectedHandler = (e) =>{
        console.log(e);
    }
    return (
        <div>
            <input type ="file"  onChange={fileSelectedHandler}/>
        </div>
    )
}

export default ImageUpload
