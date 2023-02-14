import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function InvestorSingUp() {
  const[name, setName] = React.useState('');
  const[email, setEmail] = React.useState('');
  const[password, setPassword] = React.useState('');

  const n = <p>name should be 3 characters minimim</p>

  function register(){
    if(name.length < 3){
      n
    }

  }


  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up As Investor</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100' onChange={(e)=>{setName(e.target.value)}}/>
                <br/>
               </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' onChange={(e)=>{setPassword(e.target.value)}} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'  />
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I Agree All statements in Terms of service' />
              </div>

              <button className='btn btn-success'     onClick={register}>Register</button>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://a.top4top.io/p_2600yjplt1.png' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default InvestorSingUp;