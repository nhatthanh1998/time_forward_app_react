import React, {Component} from 'react';
import styled from 'styled-components'
import moment from 'moment'
const Container = styled.div `
width:100%;
min-height:100vh;
background-color: #abe9cd;
background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
.title{
  font-size:40px;
  font-family: 'Press Start 2P', cursive;
}

`
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      status: 'off',
      intervalId: 0
    }
    this.handle_start = this
      .handle_start
      .bind(this)
  }

  handle_start() {
    if (this.state.status === 'off') {
      this.setState({status: "on", intervalId: setInterval(() => {
          this.setState({
            time: this.state.time + 1000
          })
        }, 1000)})
    } else {
      this.setState({status: "off"})
      clearInterval(this.state.intervalId)
    }
  }

  render_button() {
    if (this.state.status === "off") {
      return (
        <div
          className="btn btn-success"
          style={{
          width: "100%"
        }}
          onClick=
          {async ()=>{ await this.handle_start() } }>
          <i class="fas fa-play" style={{marginRight:"10px"}}></i>
          Bắt đầu!</div>
      )
    } else {
      return (

        <div
          className="btn btn-danger"
          style={{
          width: "100%"
        }}
          onClick=
          {async ()=>{ await this.handle_start() } }>
          <i class="fas fa-pause" style={{marginRight:"10px"}}></i>
          Tạm ngưng</div>
      )
    }
  }

  render() {
    return (
      <Container>
        <div className="container">
          <div className="row pt-5">
            <div className="col" style={{
              textAlign: "center"
            }}>
              <span className="title">Time Forward App</span>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-3"></div>
            <div className="col-6">
              {this.render_button()}
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row">
            <div
              className="col mt-5"
              style={{
              textAlign: "center"
            }}>
              <span
                style={{
                fontSize: "70px",
                color: "#3949ab"
              }}>{moment(this.state.time).format("mm:ss")}</span>
            </div>

          </div>
          <div className="row pt-5">
            <div className="col-3"></div>
            <div className="col-6">
              <div className="btn btn-dark" style={{width:"100%"}} onClick={()=>{
                this.setState({
                  status:"off",
                  time:0
                })
              }}><i class="far fa-hourglass"></i> Reset thời gian</div>
            </div>
            <div className="col-3"></div>
          </div>
          
        </div>
      </Container>

    );
  }
}

export default App;
