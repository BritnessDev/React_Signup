import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Button, Form, FloatingLabel} from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';

const App = () => {

  const [validated, setValidated] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [fsValue, setFsValue] = useState('');
  // const [code, setCode] = useState('');


  const selFsValue = (val) => {
    setFsValue(val);
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onChangeSelect = (event) => {
    selFsValue(event.target.value);
    if(event.target.value !== "")
      // .labeldisactive label
      document.getElementById("selectOption").style.top = "-18px";
    else
      document.getElementById("selectOption").style.top = "0px";
    
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

  const nextstep = (e) => {
    e.preventDefault();
    if((e.key >= 0 && e.key <= 9) || e.key === "Backspace"){
      if(e.key === "Backspace"){
        e.target.value = '';
      }else{  
        e.target.value = e.key;
      }
      var target = e.srcElement || e.target;
      var myLength = target.value.length;
      
      if (myLength >= 1) {
        
          var next = target.nextElementSibling;
          // debugger;
          while (next) {
              // if (next == null)
              //     break;
              if (next.tagName.toLowerCase() === "input") {
                  next.focus();
                  break;
              }
              next = target.nextElementSibling;
          }
      }
      // Move to previous field if empty (user pressed backspace)
      else if (myLength === 0) {
          var previous = target.previousElementSibling;
          while (previous) {
              // if (previous == null)
              //     break;
              if (previous.tagName.toLowerCase() === "input") {
                  previous.focus();
                  break;
              }
              previous = target.previousElementSibling;
          }
      }
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
                      <div className="floating-form">
                        <div className="floating-label labeldisactive" id='select_tag'>
                          <select className="floating-select" value={fsValue} onChange={onChangeSelect}>
                            <option value=""></option>
                            <option value="1">Option one Selected1</option>
                            <option value="2">Option one Selected2</option>
                            <option value="3">Option one Selected3</option>
                            <option value="4">Option one Selected4</option>
                            <option value="5">Option one Selected5</option>
                          </select>
                          <label id="selectOption">Select the option</label>
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
                        <Button type="submit" onClick={() => {setCheckEmail(true)}}>Sign Up</Button>  
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
                      
                      <Row className='verinum_container' onKeyDown={nextstep}>
                          <Form.Control
                              type="text"
                              name="firstname"
                              required
                            />
                        
                          <Form.Control
                              type="text"
                              name="firstname"
                              required
                            />
                          <Form.Control
                              type="text"
                              name="firstname"
                              required
                            />
                          <Form.Control
                              type="text"
                              name="firstname"
                              required
                            />
                          <Form.Control
                              type="text"
                              name="firstname"
                              required
                            />
                          <Form.Control
                              type="text"
                              name="firstname"
                              required
                            />
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
