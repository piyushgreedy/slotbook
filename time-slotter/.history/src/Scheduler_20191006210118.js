import React, {Component} from 'react';
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";
import './config'
import { Button, FormGroup, FormControl, Form} from "react-bootstrap";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import {Tab,Nav, Dropdown, DropdownButton, ToggleButton} from 'react-bootstrap'
import Toggle from 'react-toggle'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import Switch from "react-switch";
var noderdp=require('node-rdp');
import Terminal from 'terminal-in-react';
class Scheduler extends Component {

  constructor(props) {
    super(props);
    this.initialBookedTime=null;
    this.finalBookedArray=[];
    var ref=this;
    this.state = {
      currentPCSelected :undefined,
      cellWidthSpec: "Fixed",
      cellWidth: 120,
      crosshairType: "Disabled",
      timeHeaders: [{"groupBy":"Day"},{"groupBy":"Hour"}],
      scale: "Hour",
      businessEndsHour: 21,
      businessWeekends: true,
      days: 1,
      showNonBusiness: false,
      startDate: DayPilot.Date.today(),
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: function (args) {
        var dp = this;
        DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function(modal) {
          dp.clearSelection();
          if (!modal.result) { return; }

          console.log(args.start.toString());
          console.log(args.end.toString());

          var stringArray=[];

          var startI=(args.start.toString()).split("T")[1].split(":")[0];
          var endI=parseInt((args.end.toString()).split("T")[1].split(":")[0])-1


          for(var i=startI;i<=endI;i++){
            stringArray.push(i.toString());
          }
          console.log(stringArray);
          ref.finalBookedArray=ref.finalBookedArray.concat(stringArray);
          console.log(ref.finalBookedArray);

          dp.events.add(new DayPilot.Event({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            resource: args.resource,
            text: modal.result
          }));
        });
      },
      eventMoveHandling: "Update",
      onEventMoved: function (args) {
        this.message("Event moved: " + args.e.text());
      },
      eventResizeHandling: "Update",
      onEventResized: function (args) {
        this.message("Event resized: " + args.e.text());
      },
      eventDeleteHandling: "Update",
      onEventDeleted: function (args) {
        this.message("Event deleted: " + args.e.text());
      },
      eventClickHandling: "enabled",
      eventHoverHandling: "Bubble",
      bubble: new DayPilot.Bubble({
        onLoad: function(args) {
          // if event object doesn't specify "bubbleHtml" property 
          // this onLoad handler will be called to provide the bubble HTML
          args.html = "Event details";
        }
      }),
      rowHeaderHideIconEnabled: true,
    };
  }


  getBookedTimeSlot=(currentDate,currentPC)=>{
     // load resource and event data
    let eventArray=[]
    var splitArr;
    var that=this; 
    axios.get("http://localhost:3000/getTimeBooked?bookids="+currentDate+":::"+currentPC+":::1")
    .then((response) => {
        console.log(response.data);
        splitArr = response.data.a.split(',');
        // this.initialBookedTime=splitArr;
        console.log(splitArr);
        for(var i=0;i< splitArr.length;i++){
            console.log(splitArr[i]);
            console.log("2019-10-05T"+ splitArr[i] +":00:00")
            console.log("2019-10-05T"+ (parseInt(splitArr[i])+1).toString() +":00:00")
            var eventObj={
                id: Math.floor(Math.random() * 1000000000000),
                text: "I am Booked",
                start: "2019-10-05T"+ splitArr[i] +":00:00",
                end: "2019-10-05T"+ (parseInt(splitArr[i])+1).toString() +":00:00",
                resource: "A"
            }
            eventArray.push(eventObj);
        }  
        that.setState({
            resources: [
            {name: "Resource A", id: "A"}
            ],
            events: eventArray
        });
    });
  }

  async componentDidMount() {
    var evt2 = new Date().toString().split(" ");
    evt2.splice(4)
    var evt1 = evt2.join(" ");
    this.currentSelectedDate=this.convertDate(evt1)
    this.currentPCSelected="#PC-1"
    await this.getBookedTimeSlot(this.convertDate(evt1),"PC-1")
    // this.setState({
    //   resources: [
    //     {name: "Resource A", id: "A"}
    //   ],
    //   events: [
    //     {
    //       id: 1,
    //       text: "I am Booked",
    //       start: "2018-05-02T00:00:00",
    //       end: "2018-05-02T00:00:00",
    //       resource: "A"
    //     }
    //   ]
    // });
  }

  componentDidUpdate(){
    document.getElementsByClassName("scheduler_default_corner")[0].children[1].innerText="SAMSUNG"
  }

  bookTimeSlot = (currentPC,currentDate)=>{
    debugger
    if(!this.finalBookedArray || !currentPC || !currentDate){
      alert("Please select any time slot to book");
      return
    }
    currentPC=currentPC.substr(1);
    axios.get("http://localhost:3000/bookTimeSlot?bookids="+this.finalBookedArray+":::"+currentDate+":::"+currentPC+":::1")
    .then((response) => {
        console.log(response.data.a);
        if(response.data.a==1){
          alert("Time Slot Already Booked For this Interval");
        }else{
          alert("Time Slot Succesfull Booked");
        }
        
    });
  }

  convertDate = (inputFormat) => {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
  }

  render() {
    var {...config} = this.state;
    var style = {
      background: 'blue',
      fontSize: 200
    };
    // Render the Calendar
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    return (
      <div className="schedule-time">
        <Container>
          <Form.Label>Samsung PC Time Slot Booking</Form.Label>
        </Container>

        <Container className="myContainer">
          <Row>
            <Col xs="2"></Col>
            <Col xs="5">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Strem 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Strem 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Strem 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Container>
                            <Row>
                              <Col lg={4}>
                                <Switch
                                  onChange={()=>{}}
                                  checked={this.state.checked}
                                  id="normal-switch1"
                                ></Switch>
                                <div>
                                  <Form.Label>PC-1</Form.Label>
                                </div>
                                </Col>
                              <Col lg={4}>
                                <Switch
                                  onChange={()=>{}}
                                  checked={true}
                                  id="normal-switch2"
                                ></Switch>
                                 <div>
                                  <Form.Label>PC-2</Form.Label>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <Switch
                                  onChange={()=>{}}
                                  checked={this.state.checked}
                                  id="normal-switch3"
                                ></Switch>
                                 <div>
                                  <Form.Label>PC-3</Form.Label>
                                </div>
                              </Col>
                            </Row>

                            <Row style={{marginTop:"20px"}}>
                              <Col lg={4}>
                                <Switch
                                  onChange={()=>{}}
                                  checked={this.state.checked}
                                  id="normal-switch4"
                                ></Switch>
                                 <div>
                                  <Form.Label>PC-4</Form.Label>
                                </div>
                                </Col>
                              <Col lg={4}>
                                <Switch
                                  onChange={()=>{}}
                                  checked={true}
                                  id="normal-switch5"
                                ></Switch>
                                 <div>
                                  <Form.Label>PC-5</Form.Label>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <Switch
                                  onChange={()=>{}}
                                  checked={this.state.checked}
                                  id="normal-switch6"
                                ></Switch>
                                <div>
                                  <Form.Label>PC-6</Form.Label>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Form.Label>Information of PC</Form.Label>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Form.Label>Information of PC</Form.Label>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
                <Container style={{marginTop:"80px"}}>
                  <DropdownButton id="dropdown-basic-button" variant="success" onSelect={(evt)=>{
                    this.currentPCSelected=evt;
                    console.log(this.currentPCSelected);
                    this.setState({
                      currentPCSelected : evt
                    })
                  }} title="Select Computer Category">
                    <Dropdown.Item href="#PC-1">PC-1</Dropdown.Item>
                    <Dropdown.Item href="#PC-2">PC-2</Dropdown.Item>
                    <Dropdown.Item href="#PC-3">PC-3</Dropdown.Item>
                </DropdownButton>
            <Form.Label className="book-time-selection">PC Selected: {this.state.currentPCSelected ? this.state.currentPCSelected: "None"}</Form.Label>
        </Container>
            </Col>
            <Col xs="3">
            <InfiniteCalendar
              displayOptions={{
                showOverlay: false,
                shouldHeaderAnimate: false
              }}
              width={350}
              height={250}
              selected={today}
              // disabledDays={[0,6]}
              // minDate={lastWeek}
              onSelect={(evt)=>{
                var evt2 = evt.toString().split(" ");
                evt2.splice(4)
                var evt1 = evt2.join(" ");
                this.currentSelectedDate=this.convertDate(evt1)
                console.log(this.currentSelectedDate);
              }}
            />
            </Col>
            <Col xs="2"></Col>
          </Row>
        </Container>

        <DayPilotScheduler style={{marginTop:"60px"}}
          {...config}
          ref={component => {
            this.scheduler = component && component.control;
          }}
        />

        <Button className="book-time-slot" onClick={()=>{
            debugger
            this.bookTimeSlot(this.currentPCSelected,this.currentSelectedDate);
        }}>Book My TimeSlot</Button>
      </div>
    );
  }
}

export default Scheduler;



