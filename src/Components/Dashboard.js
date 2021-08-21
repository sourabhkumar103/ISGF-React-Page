import React, { Component } from "react";
import {
    Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import Image2 from '../image/fchek.png'
import Image4 from '../image/solarpic.jpg'

import Grid from '../image/Grid.jpg.jpg'
import Meter from '../image/Metering.jpg.jpg'
import EVehicle from '../image/EVehicle.jpg.jpg'
import EStorage from '../image/EnStorage.jpg.jpeg'
import REnergy from '../image/REnergy.jpg.jpeg'
import MicroGrid from '../image/Microgrid.jpg.jpeg'



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <Container fluid>
                    <h2><strong> What's New</strong></h2>
                <hr/>  
                <Row>
                    <Col>
                            <Card style={{ borderLeft: 'blue 1px solid', borderRight: 'blue 1px solid', borderBottom: 'blue 1px solid'}}>
                                <h2 className="headerCard1" style={{  borderBottom: 'blue 1px solid', borderTop: 'blue 1px solid' }}>ISGF Programs</h2>
                        <CardBody>
                                    <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp; DistribuTech International</p>
                                        <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;European Utility Week (Enlit Europe)</p>
                                        <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Distribution Utility Meet (DUM 2021)</p>
                                        <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Nordic EV Summit 2021</p>
                                        <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Singapore International Energy Week</p>
                                        <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;The Expert Forum for Changing Mobability</p>
                                        <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Smart Grid Foundation Course (3 Days)</p>
                                        <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Smart Grid Certificate Course (10 Weeks)</p>
                                        <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Smart Grid Bootcamp (1 Day)</p>
                                        <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Cyber Security Workshop (3 Days)</p>
                        </CardBody>
                       
                    </Card>
                    </Col>
                    <Col>
                            <Card style={{ borderLeft: 'green 1px solid', borderRight: 'green 1px solid', borderBottom: 'green 1px solid' }}>
                                <h2 className="headerCard2" style={{  borderBottom: 'green 1px solid', borderTop: 'green 1px solid' }}>ISGF Member Updates
</h2>
                        <CardBody>
                                    <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp; Bidgely has joined as an Industry Member</p>
                                    <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;NeST information Technologies Private</p>
                                    <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Limited has joined as an Industry Member</p>
                                    <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Eastern Power Distribution of AP Limited
                                        has joined as Utility Member</p>
                                    <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Research Internship </p>
                                    <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Technical Expert</p>
                                    <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Human Resource (HR) Executive</p>
                                    <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Demand Aggregation Expert in Rajkot 
                                        (12 Months Contract)</p>
                                     <br />
                                        

                        </CardBody>
                       
                    </Card>
                    </Col>
                    <Col>
                            <Card style={{ borderLeft: 'blue 1px solid', borderRight: 'blue 1px solid', borderBottom: 'blue 1px solid' }}>
                                <h2 className="headerCard1" style={{borderBottom: 'blue 1px solid', borderTop: 'blue 1px solid' }}>ISGF New Focus Areas</h2>
                        <CardBody>
                        <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;  Policy advocacy, standards development,training and capacity building for utilities</p>
                                    <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Support Utilities and Regulators for Grid Modernization and Smart Grid Roadmaps andRegulations</p>
                                    <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Limited has joined as an Industry Member</p>
                                    <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Platform for exchange of ideas and information to support development of use case scenarios for India</p>
                                    <p><CardImg style={{ width: '30px' }} top height="20" src={Image2} />&nbsp;&nbsp;Knowledge dissemination on emerging technologies and best practices through case studies, reports, white papers, bi-lateral and multi-lateral workshops, technical seminars etc. </p>
                                   
                                   
                        </CardBody>
                       
                    </Card>
                    </Col>
                </Row>
                   
                </Container>
                <Container className="mt-4" fluid style={{ backgroundImage: "url(" + (Image4) + ")", minHeight: '70vh', backgroundAttachment: 'fixed', color: 'white'}}>
                    <div className="pt-4"><h2 style={{ color: 'black' }}><strong> Industry News</strong></h2></div>
                <hr/>  
                <Row>
                    <Col>
                            <Card style={{ border: 'none', background: "transparent"}}>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <CardImg top width="100%" src={Grid} alt="Card image cap" />
                                        </Col>
                                        <Col>
                                            <CardTitle tag="h5">Grid Modernization</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button style={{ backgroundColor: 'white', color: 'blue', borderRadius: '10px' }}><strong> Read more</strong></Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        
                    </Col>
                    <Col><Card style={{border: 'none' , background: "transparent"}}>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <CardImg top width="100%" src={Meter} alt="Card image cap" />
                                        </Col>
                                        <Col>
                                            <CardTitle tag="h5">Smart Metering</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button style={{ backgroundColor: 'white', color: 'blue', borderRadius: '10px' }}><strong> Read more</strong></Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card></Col>
                    <Col><Card style={{border: 'none' , background: "transparent"}}>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <CardImg top width="100%" src={EVehicle} alt="Card image cap" />
                                        </Col>
                                        <Col>
                                            <CardTitle tag="h5">Electric Vehicles</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button style={{ backgroundColor: 'white', color: 'blue', borderRadius: '10px' }}><strong> Read more</strong></Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card></Col>
                </Row>
                <Row>
                    <Col><Card style={{border: 'none' , background: "transparent"}}>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <CardImg top width="100%" src={EStorage} alt="Card image cap" />
                                        </Col>
                                        <Col>
                                            <CardTitle tag="h5">Energy Storage</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button style={{ backgroundColor: 'white', color: 'blue', borderRadius: '10px' }}><strong> Read more</strong></Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card></Col>
                    <Col><Card style={{border: 'none' , background: "transparent"}}>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <CardImg top width="100%" src={REnergy} alt="Card image cap" />
                                        </Col>
                                        <Col>
                                            <CardTitle tag="h5">Renewable Energy</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button style={{ backgroundColor: 'white', color: 'blue', borderRadius: '10px' }}><strong> Read more</strong></Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card></Col>
                    <Col><Card style={{border: 'none' , background: "transparent"}}>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <CardImg top width="100%" src={MicroGrid} alt="Card image cap" />
                                        </Col>
                                        <Col>
                                            <CardTitle tag="h5">MicroGrids</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button style={{ backgroundColor: 'white', color: 'blue', borderRadius: '10px' }}><strong> Read more</strong></Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card></Col>
                </Row>
                   
                </Container>
                <Container className="mt-4" fluid>
                    <h2><strong>ISGF Contributions and Achievements</strong></h2>
                    <hr />
                    <Row>
                        <Col>
                            <Card style={{ borderLeft: 'green 1px solid', borderRight: 'green 1px solid', borderBottom: 'green 1px solid' }}>
                                <h2 className="headerCard4" style={{ borderBottom: 'green 1px solid', borderTop: 'green 1px solid' }}>ACHIEVEMENTS
</h2>
                                <CardBody style={{textAlign: 'center', backgroundColor: 'green'}}>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}> DistribuTech International</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>European Utility Week (Enlit Europe)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Distribution Utility Meet (DUM 2021)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Nordic EV Summit 2021</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Singapore International Energy Week</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>THE EXPERT FORUM FOR CHANGING MOBILITY</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Smart Grid Foundation Course (3 Days)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Smart Grid Certificate Course (10 Weeks)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Smart Grid Bootcamp (1 Day)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Cyber Security Workshop (3 Days)</p>
                                    <Button style={{ backgroundColor: 'white', color: 'blue', borderRadius: '10px' }}><strong> Read more</strong></Button>
                                </CardBody>

                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ borderLeft: 'orange 1px solid', borderRight: 'orange 1px solid', borderBottom: 'orange 1px solid' }}>
                                <h2 className="headerCard5" style={{ borderBottom: 'lightgrey 1px solid', borderTop: 'orange 1px solid' }}>DOMAIN EXPERTISE
</h2>
                                <CardBody style={{textAlign: 'center', backgroundColor: 'orange'}}>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}> DistribuTech International</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>European Utility Week (Enlit Europe)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Distribution Utility Meet (DUM 2021)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Nordic EV Summit 2021</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Singapore International Energy Week</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>THE EXPERT FORUM FOR CHANGING MOBILITY</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Smart Grid Foundation Course (3 Days)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Smart Grid Certificate Course (10 Weeks)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Smart Grid Bootcamp (1 Day)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Cyber Security Workshop (3 Days)</p>
                                    <Button style={{ backgroundColor: 'white', color: 'blue', borderRadius: '10px' }}><strong> Read more</strong></Button>
                                </CardBody>

                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ borderLeft: 'blue 1px solid', borderRight: 'blue 1px solid', borderBottom: 'blue 1px solid' }}>
                                <h2 className="headerCard6" style={{ borderBottom: 'lightgrey 1px solid', borderTop: 'green 1px solid' }}>FUNCTIONAL EXPERTISE
</h2>
                                <CardBody style={{ textAlign: 'center', backgroundColor: 'rgb(75, 140, 184)'}}>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}> DistribuTech International</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>European Utility Week (Enlit Europe)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Distribution Utility Meet (DUM 2021)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Nordic EV Summit 2021</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Singapore International Energy Week</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>THE EXPERT FORUM FOR CHANGING MOBILITY</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Smart Grid Foundation Course (3 Days)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Smart Grid Certificate Course (10 Weeks)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Smart Grid Bootcamp (1 Day)</p>
                                    <p className="p-2 text-white" style={{border: '1px solid white', borderRadius: '15px'}}>Cyber Security Workshop (3 Days)</p>
                                    <Button style={{ backgroundColor: 'white', color: 'blue', borderRadius: '10px' }}><strong> Read more</strong></Button>
                                </CardBody>

                            </Card>
                        </Col>
                       
                    </Row>

                </Container>
            </>
        )
    }
}
export default Dashboard;
