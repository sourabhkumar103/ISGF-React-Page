import React from 'react'
import { Row, Col,Container,
     CardImg,Button,CardBody,CardTitle } from 'reactstrap'
 import logo1 from '../image/ABB.png'
 import logo2 from '../image/adani.png'
 import logo3 from '../image/aeee.png'
 import logo4 from '../image/autogrid.png'
 import logo5 from '../image/bescom.png'
 import logo6 from '../image/Linkedin.jpg'
 import logo7 from '../image/twitter.png'
 import logo8 from '../image/location.jpg'
 import logo9 from '../image/telephone.png'
 import logo10 from '../image/mail.jpg'

 

 import Image5 from '../image/ISGFcourse.jpg'
 import Image6 from '../image/calender.JPG'

const Footer = () => {
    return (
        <> 
            <h1><strong>ISGF Members</strong></h1> 
             <hr />
          
           <Row>
               <Col>
               <CardImg style={{ width: '150px' }} top height="100px" src={logo1}/>
               </Col>
               <Col>
               <CardImg style={{ width: '150px' }} top height="100px" src={logo2}/>
               </Col>
               <Col>
               <CardImg style={{ width: '150px' }} top height="100px" src={logo3}/>
               </Col>
               <Col>
               <CardImg style={{ width: '150px' }} top height="100px" src={logo4}/>
               </Col>
               <Col>
               <CardImg style={{ width: '150px' }} top height="100px" src={logo5}/>
               </Col>
               <Col>
               <Button style={{ backgroundColor: 'white', color: 'blue', borderRadius: '10px ' }}> View All</Button>
               </Col>
             </Row>
           <hr />


           <h1><strong>Become A Member</strong></h1> 
             <hr />
             <div className="container">
                 <div className="row">
                   <div className="col-8">
                     <p>ISFG members are from the ministries, government institutions, regulatory bodies, utilities, industry,          
                       <br />
                        non-profit organisations, educational and research entities and student from renowned institutions.
                      </p>
                   </div>
                  <div className="col-4"> <Button style = {{background :'green'}}>Know More About ISGF Membership</Button></div> </div>
             </div> 
         <br />


       <div className= "main-container" style = {{background : 'blue', paddingBottom:'40px'}}>
          <Container style = {{background:'blue', color:'white'}}>
            <Row>
               <Col>
                 
                   <CardBody>
                        <CardTitle tag="h3">LinkedIn</CardTitle>
                        <hr />
                        <p><CardImg style={{ width: '30px' }} top height="20" src={logo6} />&nbsp;&nbsp;The Smart Grid Foundation course will introduce the participants with the smart #SmartGrid technologies and 
                        their realworld applications .The Course starts from 07 July- 14 August 2021 on Digital Platform.</p>
                   </CardBody>
                   <CardImg bottom width="50px" src={Image5}/>
                 
                </Col>
                <Col>
                 
                   <CardBody>
                        <CardTitle tag="h3">Tweets</CardTitle>
                        <hr />
                        <p>Tweets by @IndiaSmartGridF</p>
                        <p><CardImg style={{ width: '30px' }} top height="20" src={logo7} />&nbsp;&nbsp;Identify the key Barriers in realising the successful Development of a robust Smart Grid Eco-system and
                        play a critical role in the smart Grid development</p>
                        <hr />
                        <p><CardImg style={{ width: '30px' }} top height="20" src={logo7} />&nbsp;&nbsp;Identify the key Barriers in realising the successful Development of a robust Smart Grid Eco-system and
                        play a critical role in the smart Grid development</p>
                   
                   </CardBody>
                 </Col>

                 <Col>
                  <CardBody>
                        <CardTitle tag="h3">Events Calender</CardTitle>
                        <hr />
                        <Button style = {{ backgroundColor: 'blue', color: 'white', borderRadius: '5px' }} size="sm">ISGF Events</Button>{'           '}
                        <Button style = {{ backgroundColor: 'blue', color: 'white', borderRadius: '5px' }} size="sm">Global Events</Button>
                        <hr />
                        <CardImg style ={{width :"90%" , borderRadius: '10px'}} src={Image6} />
                   </CardBody>
                   
                  </Col>
                  <Col>
                 
                   <CardBody>
                        <CardTitle tag="h5">Contact Us</CardTitle>
                        <p><CardImg style={{ width: '20px' }} top height="20" src={logo8} /><strong>India Smart Grid Forum</strong>
                        <br />
                        CBIP Building,Malcha Marg,Chanakypuri,Delhi-110021</p>
                        <p><CardImg style={{ width: '20px' }} top height="20" src={logo9} /><strong>Phone</strong>
                        <br />
                         91  114103  0398</p>
                        <p><CardImg style={{ width: '20px' }} top height="20" src={logo10} /><strong>E-Mail</strong>
                        <br />
                        contactus@indiasmartgrid.org</p>

                        <Button style = {{ backgroundColor: 'blue', color: 'white', borderRadius: '5px' }} size="lg" block>Click for More Information</Button>
                       
                   </CardBody>
                  </Col>
             </Row>        
         </Container>
      </div>


      <div className="main-container" style = {{background :'green', color:'white', padding: '10px'}}>
                 <div className="row">
                    <div className="col-9" >
                      <p>Sitemap | Guidelines & Policies | Disclaimer | Privacy Policy | Terms & Conditions | Refund and Cancellation</p>
                   </div>
                   <div className="col-3"> <p>@2021 ISGF, ALL Rights Reserved</p>
                   </div>
                 </div>
       </div> 


     </>

    )
}

export default Footer;
