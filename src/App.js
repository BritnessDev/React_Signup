import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BootstrapSelect from 'react-bootstrap-select-dropdown'
import { Container, Row, Col, Image, Button, Card, Form, FloatingLabel, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';

const App = () => {

  const [validated, setValidated] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [fsValue, setFsValue] = useState('');

  const selFsValue = (val) => {
    setFsValue(val);
  }

  const options = [
    {
      "labelKey": "optionItem1",
      "value": "Option item 1"
    },
    {
      "labelKey": "optionItem2",
      "value": "Option item 2"
    }
  ]
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleChange = (selectedOptions) => {
    console.log(selectedOptions);
  }

  const password_show_hide = () => {
    console.log('fdsa');
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }

  
  const confirmPassword_show_hide = () => {
    console.log('fdsa');
    var x = document.getElementById("confirmPassword");
    var show_eye = document.getElementById("confirm_show_eye");
    var hide_eye = document.getElementById("confirm_hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }

  return(
    <Container fluid className='p-0'>
        <Row  className='m-0 signup_container'>
          <Col lg={7} className='p-0 car_container'>
            <div className='carousel_Img'></div>
          </Col>
          {
            !checkEmail ? 
            <Col className='right_Side content_container' lg={5}>
            <Row className='right_Panel'>
              <Col className='signup_content_container'>
                <Row>
                  <Col className="text-center">
                    <img src='logo.png' alt="logo" className='logoImg logo_container' />
                  </Col>
                </Row>
                <Row>
                  <Col className='signupBlock'>
                    <div className="text-center">
                      <div className='subtitle'>Create an account to continue</div>
                    </div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="form_container">
                      <Row className="mb-3" id="row_name">
                        <FloatingLabel className='CFLabel' as={Col} md="6" controlId="firstname" label="First name">
                          <Form.Control
                            type="text"
                            placeholder="First name"
                            name="firstname"
                            // value={values.firstname}
                            // onChange={handleChange}
                            // isInvalid={!!errors.firstname}
                            required
                            className='CFInput'
                            isInvalid={true}
                          />

                          <Form.Control.Feedback type="invalid" >
                            {/* {errors.firstname} */}Enter valid email and password.
                          </Form.Control.Feedback>
                        </FloatingLabel>
                        <FloatingLabel className='CNLabel' as={Col} md="6" controlId="lastname" label="Last name">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid lastname.
                          </Form.Control.Feedback>
                        </FloatingLabel>
                      </Row>
                      <Row className="mb-3" id="row_email">
                        <FloatingLabel className='CNLabel' as={Col} md="12" controlId="emailaddress" label="Email Address">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Email Address"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                          </Form.Control.Feedback>
                        </FloatingLabel>
                      </Row>
                      <Form.Group>
                        <Row className="mb-3" id='row_password'>
                          <FloatingLabel className='CNLabel' as={Col} md="6" controlId="password" label="Password">
                            <Form.Control
                              type="password"
                              placeholder="Password"
                              name="Password"
                              // value={values.firstname}
                              // onChange={handleChange}
                              // isInvalid={!!errors.firstname}
                              required
                            />
                            <span className='passicon' onClick={password_show_hide}>
                              <AiOutlineEye  id="show_eye"/>
                              <RiEyeCloseLine className='d-none'  id="hide_eye"/>
                            </span>
                          </FloatingLabel>
                          <FloatingLabel className='CNLabel' as={Col} md="6" controlId="confirmPassword" label="Confirm">
                            <Form.Control
                              required
                              type="password"
                              placeholder="Confirm Password"
                            />        
                            <span className='passicon' onClick={confirmPassword_show_hide}>
                              <AiOutlineEye  id="confirm_show_eye"/>
                              <RiEyeCloseLine className='d-none'  id="confirm_hide_eye"/>
                            </span>             
                          </FloatingLabel>
                        </Row>
                      </Form.Group>
                      <Row className='mb-3' id='parent_rule_password'>
                        <p id='row_rule_password'>The password must contain <span id="rule_green">Special character</span>, 
                        <span  id="rule_red">Upper Case</span>, <span id='rule_green'>Numeric</span>, <br/> and <span id='rule_green'>8 digits</span></p>
                      </Row>
                      <Row>
                      <div class="floating-form">
                        <div className="floating-label labeldisactive" id='select_tag'>
                          <select className="floating-select" value={fsValue} onChange={e=>selFsValue(e.target.value)}>
                            <option value=""></option>
                            <option value="1">Option one Selected1</option>
                            <option value="2">Option one Selected2</option>
                            <option value="3">Option one Selected3</option>
                            <option value="4">Option one Selected4</option>
                            <option value="5">Option one Selected5</option>
                          </select>
                          <label>Select the option</label>
                        </div>
                        </div>
                      </Row>
                      
                      <Row className='agree_checkbox_container'>
                        <Col lg={1}>
                          <Form.Group className="mb-3">
                          <Form.Check
                            required
                            feedbackType="invalid"
                            className='agree_checkbox'
                          />
                        </Form.Group>
                        </Col>
                        <Col>
                          <p className='lavel_accept'>I accept <span className='highlight_blue_text'>Terms</span> and <span className='highlight_blue_text'>Conditions</span> of the testtest.com</p>
                        </Col>
                      </Row>
                      <Row lg={12} className="btn_submit">
                        <Button type="submit">Sign Up</Button>  
                      </Row>
                      
                    </Form>
                    <Row>
                      <p className='already_account'>Already have an account? <span className='highlight_blue_text'>Login Here</span></p>
                    </Row>
                    <Row lg={12} className="btn_submit">
                        <Button type="submit" className='btn_login' onClick={() => {setCheckEmail(true)}}>Login</Button>  
                      </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            </Col> 
            : 
              <Col className='right_Side content_container' lg={5}>
            <Row className='veri_right_Panel'>
              <Col className='signup_content_container'>
                <Row>
                  <Col className="text-center">
                    <img src='logo.png' alt="logo" className='logoImg logo_container' />
                  </Col>
                </Row>
                <Row>
                  <Col className='signupBlock'>
                    <div className="text-center">
                      <div className='subtitle'>Enter 6 digit PIN number</div>
                    </div>
                    <div className='veri_label'>
                      We have sent 6 digit PIN number to your email and mobile number.
                    </div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="form_container">
                      
                      <Row className='verinum_container'>
                        <Col lg={2}>
                          <Form.Control
                              type="text"
                              name="firstname"
                              required
                            />
                        </Col>
                        <Col lg={2}>
                          <Form.Control
                              type="text"
                              name="firstname"
                              required
                            />
                        </Col>
                        <Col lg={2}>
                          <Form.Control
                              type="text"
                              name="firstname"
                              required
                            />
                        </Col>
                        <Col lg={2}>
                          <Form.Control
                              type="text"
                              name="firstname"
                              required
                            />
                        </Col>
                        <Col lg={2}>
                          <Form.Control
                              type="text"
                              name="firstname"
                              required
                            />
                        </Col>
                        <Col lg={2}>
                          <Form.Control
                              type="text"
                              name="firstname"
                              required
                            />
                        </Col>
                      </Row>
                      
                      <Row lg={12} className="btn_veri_submit">
                        <Button type="submit btn_verify">Verify my account</Button>  
                      </Row>
                      
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
            </Col>
          }
        </Row>
    </Container>
  )
  
}

export default App;
