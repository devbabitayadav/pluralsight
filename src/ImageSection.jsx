import React from 'react'
import Main from "./assets/main.png"



const ImageSection = () => {
  return (
    <>
    
    <div className="image-section">
                <img src={Main} alt=""/>
                  <button className="try-btn">
                    Try For Free
                  </button>
              </div>
    </>
  )
}

export default ImageSection
