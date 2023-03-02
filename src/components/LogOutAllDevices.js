import React, { useEffect } from 'react'
import style from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'
import { useDispatch, useSelector } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { setWrongEmail, setemailInput } from '../redux/Login'
import { postLogoutDevices } from '../redux/LogOutDevicesApi'

const LogoutAllDevices = () => {
  AOS.init({
    duration: 1250,
  })

  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const { loading, logOutRes, wrongEmail, emailInput } = useSelector(
    (state) => state.logInReducer,
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
    const userDetail = { email: emailInput }
    dispatch(postLogoutDevices(userDetail))
  }

  useEffect(() => {
    if (logOutRes) {
      alert(logOutRes)
      Navigate('/')
      window.location.reload()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logOutRes])

  const btnDisable = wrongEmail

  return (
    <Maincontainer>
      <CardBodyWrapper
        data-aos="zoom-in-up"
        data-aos-delay="70"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <CardBody>
          <Header>
            <HeaderText>
              You are already signedIn on another device!! Do you wish to log-out from
              all devices? Kindly fill-in your email
            </HeaderText>
          </Header>
          <FormData onSubmit={(e) => handleSubmit(e)}>
            <EmailInput>
              <Laber>Email Address</Laber>
              <Input
                onChange={(e) => handleEmail(e)}
                type="email"
                placeholder="Type Here"
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
                  size={25}
                  thickness={91}
                  speed={100}
                  color="rgba(57, 114, 172, 1)"
                  secondaryColor="rgba(0, 0, 0, 0.44)"
                />
              ) : (
                'Logout all devices'
              )}
            </Button>
          </FormData>
        </CardBody>
      </CardBodyWrapper>
    </Maincontainer>
  )
}

export default LogoutAllDevices

const Button = style.button`
  width: 50%;
  height: 40px;
  background: #B7BCC3;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: #fff;
  margin: 20px 0px 20px 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const EmailInput = style.div`
    margin-top: 3%;
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
const Laber = style.div`
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

const HeaderText = style.p`
  margin-top: 3%;
  margin-bottom: 5%;
  width: 90%;
  height: 29px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 80px;
  font-size: 15px;
  }
`
const Header = style.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    height: 40vh;
  }
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
  width: 85%;
  height: max-content;
  background: #fff;
  box-shadow: 2px 2px 5px -6px rgba(0,0,0,0.69);
-webkit-box-shadow: 2px 2px 5px -6px rgba(0,0,0,0.69);
-moz-box-shadow: 2px 2px 5px -6px rgba(0,0,0,0.69);
display: flex;
justify-content: center;

@media screen and (max-width: 768px) {
  height: 100vh;
}
`

const CardBody = style.div`
  width: 80%;
  height: 90%;
`
