import React from 'react'
import '../styles/homescreen.css'



const HomeScreen = () => {
  return ( 
          <>    

      <div className="homeScreen">
  


         <h1 h1>LUNAR BANKING A SITE BUILT WITH 
    REACT/ REDUX/ NODE / EXPRESS / MONGODB / MONGOOSE / JSON WEB TOKEN </h1>


              <div class="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            

      
         
        </div>
      </>


  )
} 
export default HomeScreen
