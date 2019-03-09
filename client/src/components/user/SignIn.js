import React, { Component } from "react"
import { connect } from "react-redux"
import { Field, formValueSelector, reduxForm } from "redux-form"
import { Arwes, Button, Col, Frame as FrameC, Loading, Project } from "arwes"
import { MarginTop } from "../../common/styled/MarginTop"

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label className={"text-muted"}>{label}</label>
    <div>
      <input
        className={"form-control"}
        {...input}
        placeholder={label}
        type={type}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class SignIn extends Component {
  render() {
    const { handleSubmit } = this.props
    const { user } = this.props
    if (user.isLoading) {
      return (
        <Arwes>
          <MarginTop />
          <Col s={12} m={8} l={6} offset={["m2", "l3"]}>
            <Loading full animate />
          </Col>
        </Arwes>
      )
    }
    return (
      <Project header={"Login"} animate level={1} corners={3}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Field
              name="email"
              type={"email"}
              label={"email"}
              component={renderField}
            />
            <Field
              name="password"
              type={"password"}
              label={"password"}
              component={renderField}
            />
            <Button animate layer="success">
              <i className="mdi mdi-chemical-weapon" /> Login
            </Button>
          </div>
        </form>
      </Project>
    )
  }
}

const FORM_NAME = "loginForm"
const form = reduxForm({ form: FORM_NAME })(SignIn)
const selector = formValueSelector(FORM_NAME)

const initialValues = {
  email: 'defaultUser@gmail.com',
  password: 'default123'
}
const mapStateToProps = state => {
  const values = selector(state, "data")
  return {
    formValues: values,
    user: state.user,
    initialValues: initialValues
  }
}

export default connect(mapStateToProps)(form)
