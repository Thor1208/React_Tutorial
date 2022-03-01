import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    

  render() {

    return this.state.isLoggedIn && <div>Welcome PixeloTech</div> 

    // return(
    //   this.state.isLoggedIn ? 
    //   <div>Welcome PixeloTech</div> : 
    //   <div>Welcome Vijay</div>
    // )

    // let message
    // if(this.state.isLoggedIn){
    //   message = <div>Welcome PixeloTech</div>
    // }
    // else{
    //   message = <div>Welcome Vijay</div>
    // }
    // return <div>{message}</div>

    // if(this.state.isLoggedIn){
    //   return(
    //     <div>Welcome PixeloTech</div>
    //   )
    // }
    // else{
    //   return (
    //     <div>
    //       <div>Welcome Vijay</div>
    //     </div>
    //   )
    }
    // return (
    //   <div>
    //     <div>Welcome PixeloTech</div>
    //     <div>Welcome Vijay</div>
    //   </div>
    // )
  }

export default UserGreeting
