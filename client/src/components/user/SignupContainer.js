import React, { Component } from "react"
import Signup from "./Signup"
import { Arwes, Col, Frame as FrameC, Header, Row, Words } from "arwes"
import styled from "styled-components"
import { signUp } from "./redux/reducers"
import { connect } from "react-redux"

const Container = styled.div`
  margin-top: 100px;
`

class SignupContainer extends Component {
  handleSubmit = values => {
    this.props.signUp(values)
  }
  render() {
    const { user } = this.props
    console.log("%c user", "background: red", user)
    return (
      <Arwes>
        <Container>
          <Row>
            <Col s={12} m={8} l={6} offset={["m2", "l3"]}>
              <Signup onSubmit={this.handleSubmit} />
            </Col>
          </Row>
          <Row>
            <Col s={12} m={8} l={6} offset={["m2", "l3"]}>
              {user && user.loaded === "error" && (
                <FrameC animate level={3} corners={3} layer={"alert"}>
                  <div style={{ margin: '20px' }}>

                  <Words animate layer='alert'>Error has occurred, please try again</Words>
                  </div>
                </FrameC>
              )}
            </Col>
          </Row>
        </Container>
      </Arwes>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { signUp }
)(SignupContainer)
