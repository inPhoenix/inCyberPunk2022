import React, { Component } from "react"
import { Arwes, Col, Frame as FrameC, Header, Words } from "arwes"
import { connect } from "react-redux"
import { MarginTop } from "../../common/styled/MarginTop"

class Homepage extends Component {
  render() {
    return (
      <Arwes>
          <MarginTop/>
        <Col s={12} m={8} l={6} offset={["m2", "l3"]}>
          <FrameC animate level={2} corners={1} layer={"success"}>
            <h3 style={{ margin: 20 }}>
              <Words animate layer="success">
                Welcome to Cyberpunk Communications
              </Words>
            </h3>
          </FrameC>
          <div>You are Logged</div>
        </Col>
      </Arwes>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(Homepage)
