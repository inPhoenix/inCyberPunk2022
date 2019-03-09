import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Arwes, Link as Lnk, Words, Row, Col, Frame as FrameC } from "arwes"
import styled from "styled-components"

const ASSETS = `${process.env.PUBLIC_URL}/assets`

const MarginTop = styled.div`
  margin-top: 50px;
`
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
`

class Home extends Component {
  render() {
    return (
      <Arwes animate background={`${ASSETS}/image.png`} pattern={`${ASSETS}/test.png`}>
        <MarginTop />
        <Right>
          <FrameC animate level={2} corners={1} layer={"success"}>
            <div style={{ height: "80vh" }}>
              <h3 style={{ margin: 20 }}>
                <Words animate layer="success">
                  Cyberpunk Communications
                </Words>
              </h3>

              <div style={{ margin: 20 }}>
                <Link to={"/signUp"}>
                  <Lnk>SignUp</Lnk>
                </Link>
              </div>
              <div style={{ margin: 20 }}>
                <Link to={"/signIn"}>
                  <Lnk>Login</Lnk>
                </Link>
              </div>
            </div>
          </FrameC>
        </Right>
      </Arwes>
    )
  }
}

export default Home
