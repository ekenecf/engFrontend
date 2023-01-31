import React from 'react'
import style from 'styled-components'
import { AiOutlineEye } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SpinnerCircular } from 'spinners-react'

import {
  setWrongPassword,
  setPasswordShow,
  setpasswordInput,
} from '../redux/signUp'
import { postResetPassword } from '../redux/NewPasswordApi'

const NewPassword = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const params = useParams()

  const { resetToken } = params

  const { wrongPassword, passwordShow, passwordInput } = useSelector(
    (state) => state.signUpReducer,
  )

  const { loading1, passwordInput1 } = useSelector(
    (state) => state.newPasswordReducer,
  )

  const showPassword = () => {
    dispatch(setPasswordShow())
  }

  const handlePassword = (e) => {
    const password = e.target.value
    if (password.length > 0) {
      dispatch(setpasswordInput(password))
      return dispatch(setWrongPassword(true))
    }
    return dispatch(setWrongPassword(false))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userDetail = {
      password: passwordInput,
    }
    dispatch(postResetPassword(userDetail, resetToken))
  }

  if (passwordInput1) {
    alert('Successfully Updated password')
    window.location.reload()
    Navigate('/')
  }

  const btnDisable =
    !/[0-9]/.test(passwordInput) ||
    !(passwordInput.length >= 8) ||
    !/[A-Z]/.test(passwordInput) ||
    // eslint-disable-next-line no-useless-escape
    !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(passwordInput)

  return (
    <Maincontainer>
      <CardBodyWrapper>
        <CardBody>
          <FormData onSubmit={(e) => handleSubmit(e)}>
            <PasswordInput>
              <Label>New Password</Label>
              <PasswordIcon>
                <Input2
                  type={passwordShow ? 'text' : 'password'}
                  placeholder="Input new password Here"
                  name="password"
                  onChange={(e) => handlePassword(e)}
                />
                <AiOutlineEye
                  style={{
                    fontSize: '20px',
                    cursor: 'pointer',
                    marginLeft: '10px',
                  }}
                  onClick={showPassword}
                />
              </PasswordIcon>
              {wrongPassword ? (
                <PasswordInfo>
                  <ul type="disk">
                    <li
                      style={{
                        color: /[A-Z]/.test(passwordInput)
                          ? 'green'
                          : '#999B9F',
                      }}
                    >
                      Contains at least one uppercase letter
                    </li>
                    <li
                      style={{
                        color: passwordInput.length >= 8 ? 'green' : '#999B9F',
                      }}
                    >
                      Contains eight characters
                    </li>
                    <li
                      style={{
                        color: /[0-9]/.test(passwordInput)
                          ? 'green'
                          : '#999B9F',
                      }}
                    >
                      Contains at least one number
                    </li>
                    <li
                      style={{
                        // eslint-disable-next-line no-useless-escape
                        color: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(
                          passwordInput,
                        )
                          ? 'green'
                          : '#999B9F',
                      }}
                    >
                      Contains at least one symbol
                    </li>
                  </ul>
                </PasswordInfo>
              ) : (
                ''
              )}
            </PasswordInput>
            <Button
              type="submit"
              disabled={btnDisable}
              style={{ background: btnDisable ? '#B7BCC3' : '#555658' }}
            >
              {loading1 ? (
                <SpinnerCircular
                  size={25}
                  thickness={91}
                  speed={100}
                  color="rgba(57, 114, 172, 1)"
                  secondaryColor="rgba(0, 0, 0, 0.44)"
                />
              ) : (
                'Reset Password'
              )}
            </Button>
          </FormData>
        </CardBody>
      </CardBodyWrapper>
    </Maincontainer>
  )
}
export default NewPassword

const Button = style.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: #fff;
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const PasswordInfo = style.div`
ul {
  margin: 0px;
  padding: 3px;
}
ul li{
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #999B9F;
  margin: 0px 15px;
}
`
const PasswordIcon = style.div`
  width: 100%
  height: 30px;
  border:  1px solid lightgray;
  border-radius: 5px;
  background: #fff;
  display: flex;
  align-items: center;
`
const PasswordInput = style.div`
  width: 100%;
`

const Input2 = style.input`
  width: 90%;
  height: 30px;
  border-radius: 4px;
  outline: none;
  border: none;
  padding-left: 10px;
`

const Label = style.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 17px;
  color: #1A1A1A;
  margin-bottom: 5%;
  margin-top: 5%;
  text-align: center;
`

const FormData = style.form`
  width: 100%
`

const Maincontainer = style.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FAFAFA;
`
const CardBodyWrapper = style.div`
  width: 50%;
  height: max-content;
  background: #fff;
  box-shadow: 2px 2px 5px -6px rgba(0,0,0,0.69);
-webkit-box-shadow: 2px 2px 5px -6px rgba(0,0,0,0.69);
-moz-box-shadow: 2px 2px 5px -6px rgba(0,0,0,0.69);
display: flex;
justify-content: center;

@media (max-width: 768px) {
  width: 95%;
}
`
const CardBody = style.div`
  width: 80%;
  height: 90%;
`
