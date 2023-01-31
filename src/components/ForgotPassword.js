import React from 'react'
import style from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SpinnerCircular } from 'spinners-react'

import { setemailInput, setWrongEmail } from '../redux/signUp'
import { postForgotPassword } from '../redux/ForgotPasswordApi'

const ForgotPassword = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()

  const { wrongEmail, emailInput } = useSelector((state) => state.signUpReducer)

  const { loading, error, forgotPassword } = useSelector(
    (state) => state.forgotPasswordReducer,
  )

  const handleEmail = (e) => {
    const email = e.target.value
    if (email.length > 0) {
      dispatch(setemailInput(email))
    }
    if (/@/.test(email) || email.length === 0) {
      return dispatch(setWrongEmail(false))
    } else {
      return dispatch(setWrongEmail(true))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userDetail = {
      email: emailInput,
    }
    console.log(userDetail)
    dispatch(postForgotPassword(userDetail))
  }

  if (error) {
    alert(error)
    window.location.reload()
  }
  if (forgotPassword) {
    alert(forgotPassword)
    Navigate('/')
  }

  const btnDisable = wrongEmail || !emailInput

  return (
    <Maincontainer>
      <CardBodyWrapper>
        <CardBody>
          <Header>
            <HeaderText>Forgot Password</HeaderText>
            <HeaderLink>
              Back to{' '}
              <span>
                {' '}
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(0, 76, 189, 1)',
                  }}
                >
                  {' '}
                  Log in
                </Link>
              </span>
            </HeaderLink>
          </Header>
          <FormData onSubmit={(e) => handleSubmit(e)}>
            <EmailInput>
              <Label>Email Address</Label>
              <Input
                onChange={(e) => handleEmail(e)}
                type="email"
                placeholder="Input email"
              />
              {wrongEmail ? <span>Wrong email format!</span> : ''}
            </EmailInput>
            <Button
              type="submit"
              disabled={btnDisable}
              style={{ background: btnDisable ? '#B7BCC3' : '#555658' }}
            >
              {loading ? (
                <SpinnerCircular
                  style={{ position: 'absolute', right: '20px' }}
                  size={25}
                  thickness={91}
                  speed={100}
                  color="rgba(57, 114, 172, 1)"
                  secondaryColor="rgba(0, 0, 0, 0.44)"
                />
              ) : 'Send Link'}
            </Button>
          </FormData>
        </CardBody>
      </CardBodyWrapper>
    </Maincontainer>
  )
}
export default ForgotPassword

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
  position:relative
`
const EmailInput = style.div`
  width: 100%;
  margin-bottom: 3%;
  span{
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #F41E10;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin-top: 8%;
  }
`
const Input = style.input`
  width: 100%;
  height: 30px;
  border-radius: 4px;
  outline: none;
  border:  1px solid lightgray;
  padding-left: 10px;
  margin: 1% 0px;
`
const Label = style.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #1A1A1A;
`
const FormData = style.form`
  width: 100%
`
const HeaderLink = style.div`
  ont-family: 'Montserrat';
  ont-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #777777;
  span{
    color: rgba(0, 76, 189, 1);
    cursor: pointer;
  }
`
const HeaderText = style.div`
  margin-top: 3%;
  width: 230px;
  height: 29px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  text-align: center;
`
const Header = style.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  @media (max-width: 768px) {
    width: 84%;
  }
`
