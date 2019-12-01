import React, {Component} from 'react';
import Select from 'react-select';
import {Abhaas, AbhaasScheduler} from "abhaas"
import './config'
import './schedule.css'
import { Button, FormGroup, FormControl, Form} from "react-bootstrap";
import axios from 'axios';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import {Tab,Nav, Dropdown, DropdownButton, ToggleButton} from 'react-bootstrap'
import Toggle from 'react-toggle'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import Switch from "react-switch";
import Terminal from 'terminal-in-react';
import { async } from 'q';
var shell = require('shelljs');
var execSh = require("exec-sh");
var classNames = require('classnames');

let namessonn={
  "names":[
      {
          "id":1,
          "name":"Airtel",
          "portvalue": "403",
          "funcValue": "ok"
      },
      {
          "id":2,
          "value":"Vodafone",
          "portvalue": "403",
          "funcValue": "ok"
      },
      {
          "id":3,
          "value":"Idea",
          "portvalue": "403",
          "funcValue": "ok"
      }
  ]
}

class Scheduler extends Component {
  constructor(props) {
    super(props);
    this.initialBookedTime=null;
    this.finalBookedArray=[];
    this.eventArray=[];
    var ref=this;

    this.state = {
      isStreamRack:true,
      pcvalue:"pc1",
      check1:false,
      check2:false,
      check3:false,
      check4:false,
      check5:false,
      check6:false,
      checked:true,
      currentPCSelected :undefined,
      cellWidthSpec: "Fixed",
      cellWidth: 120,
      crosshairType: "Disabled",
      timeHeaders: [{"groupBy":"Day"},{"groupBy":"Hour"}],
      scale: "Hour",
      businessBeginsHour: 0,
      businessEndsHour: 24,
      businessWeekends: true,
      days: 1,
      showNonBusiness: false,
      startDate: "2019-10-29",
      timeRangeSelectedHandling: "Enabled",
      deleteDisabled:true,
      onTimeRangeSelected: function (args) {
        ref.currentPCSelected="#"+args.resource;
        var dp = this;
        Abhaas.Modal.prompt("New Time Slot Booking", "I am Booking this Time Slot").then(function(modal) {
          dp.clearSelection();
          if (!modal.result) { return; }
          debugger
          console.log(args.start.toString());
          console.log(args.end.toString());

          var stringArray=[];
          var startI=(args.start.toString()).split("T")[1].split(":")[0];
          var endI=parseInt((args.end.toString()).split("T")[1].split(":")[0])-1

          console.log(startI);
          console.log(endI);

          for(var i=startI;i<=endI;i++){
            stringArray.push(i.toString());
          }
          console.log(stringArray);

          if(endI=="-1"){
            stringArray.push(23)
          }

          ref.finalBookedArray=ref.finalBookedArray.concat(stringArray);
          console.log(ref.finalBookedArray);

          dp.events.add(new Abhaas.Event({
            start: args.start,
            end: args.end,
            id: Abhaas.guid(),
            resource: args.resource,
            text: modal.result
          }));

          ref.bookTimeSlot(ref.currentPCSelected,ref.currentSelectedDate);
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
      eventClickHandling: "enabled",
      eventHoverHandling: "Bubble",
      bubble: new Abhaas.Bubble({
        onLoad: function(args) {
          // if event object doesn't specify "bubbleHtml" property 
          // this onLoad handler will be called to provide the bubble HTML
          args.html = "I am Booked";
        }
      }),
      rowHeaderHideIconEnabled: true,
    };
  }

  updateSlotBookingPC= async(currentDate, currentPC)=>{
      // load resource and event data
      debugger
      var splitArr;
      var splitDataDate=currentDate.split("/")
      var splitDay=splitDataDate[0];
      var splitMonth=splitDataDate[1];
      var splitYear=splitDataDate[2];
      var splitDate=splitYear+"-"+splitMonth+"-"+splitDay;
      let isAvailable=true;

      await axios.get("http://localhost:3000/getTimeBookedUser?bookids="+currentDate+":::"+currentPC+":::"+localStorage.getItem("userId"))
      .then((response) => {
          debugger
          console.log(response.data);
          splitArr = response.data.a.split(',');
          //this.initialBookedTime=splitArr;
          console.log(splitArr);
          debugger
          var currentSlot=(new Date()).getHours().toString();

          if(currentSlot < 10){
            currentSlot="0"+currentSlot;
          }
          debugger
          var findSlot=splitArr.find((elem)=>{
            if(elem===currentSlot)
              return true;
          })
          if(findSlot){
            isAvailable=false;
          }
      },(error)=>{
        isAvailable=true;
        console.log(error);
      });

      isAvailable=!isAvailable;

      switch(currentPC){
        case "PC-1":
          this.setState({
            check1:isAvailable,
            startDate: splitDate
          })
          break;
        case "PC-2":
          this.setState({
            check2:isAvailable,
            startDate: splitDate
          })
          break;
        case "PC-3":
          this.setState({
            check3:isAvailable,
            startDate: splitDate
          })
          break;
        case "PC-4":
          this.setState({
            check4:isAvailable,
            startDate: splitDate
          })
          break;
        case "PC-5":
          this.setState({
            check5:isAvailable,
            startDate: splitDate
          })
          break;
        case "PC-6":
          this.setState({
            check6:isAvailable,
            startDate: splitDate
          })
          break;
      }
  }

  getBookedTimeSlotUser= (currentDate,currentPC)=>{
    // load resource and event data
   var splitArr;
   var that=this; 
   var splitDataDate=currentDate.split("/")
   var splitDay=splitDataDate[0];
   var splitMonth=splitDataDate[1];
   var splitYear=splitDataDate[2];
   var splitDate=splitYear+"-"+splitMonth+"-"+splitDay;
 
   axios.get("http://localhost:3000/getTimeBookedUser?bookids="+currentDate+":::"+currentPC+":::"+localStorage.getItem("userId"))
   .then((response) => {
      debugger
      console.log(response);
   },(error)=>{
   });
 }


  getBookedTimeSlot=(currentDate,currentPC)=>{
     // load resource and event data
    var splitArr;
    var that=this; 
    var splitDataDate=currentDate.split("/")
    var splitDay=splitDataDate[0];
    var splitMonth=splitDataDate[1];
    var splitYear=splitDataDate[2];
    var splitDate=splitYear+"-"+splitMonth+"-"+splitDay;

    return new Promise((resolve,reject)=>{
      axios.get("http://localhost:3000/getTimeBooked?bookids="+currentDate+":::"+currentPC)
      .then((response) => {
          debugger
          console.log(currentPC)
          // console.log(response.data);
          splitArr = response.data.a.split(',');
          // this.initialBookedTime=splitArr;
          // console.log(splitArr);
          for(var i=0;i< splitArr.length;i++){
             
              // console.log(splitArr[i]);
  
              // console.log(splitDate+"T"+splitArr[i] +":00:00")
              // console.log(splitDate+"T"+(parseInt(splitArr[i])+1).toString() +":00:00")
              let incValue=(parseInt(splitArr[i])+1)
              let startIndex=splitArr[i];
              if(incValue < 10){
                incValue="0"+incValue
              }
              if(splitArr[i].length < 2){
                startIndex = "0"+startIndex;
              }
  
              var eventObj={
                id: Math.floor(Math.random() * 1000000000000),
                text: "I am Booked",
                start: splitDate+"T"+startIndex.toString()+":00:00",
                end: splitDate+"T"+ incValue +":00:00",
                resource: currentPC
              }
              
              this.eventArray.push(eventObj);
          }  
          resolve("success");
        //   var eventObj={
        //     id: Math.floor(Math.random() * 1000000000000),
        //     text: "I am Booked",
        //     start: "2019-10-29T08:00:00",
        //     end: "2019-10-29T11:00:00",
  
        //     // "start": "2019-10-29T08:00:00",
        //     // "end": "2019-10-29T11:00:00",
        //     resource: "A"
        //   }
        // eventArray.push(eventObj);
      },(error)=>{
        resolve("failure");
      });
    })

  }

  async componentDidMount() {
    if(!localStorage.getItem("userId") && !localStorage.getItem("username")){
      this.props.history.push(`/login`);
    }
    var evt2 = new Date().toString().split(" ");
    evt2.splice(4)
    var evt1 = evt2.join(" ");
    this.currentSelectedDate=this.convertDate(evt1)
    this.currentPCSelected="#PC-1"
    
    for(var i=1; i<=4; i++){
      await this.getBookedTimeSlot(this.convertDate(evt1),"PC-"+i)
    }
    
    this.setState({
      resources: [{name: "PC-1", id: "PC-1"}, {name: "PC-2", id: "PC-2"}, {name: "PC-3", id: "PC-3"}, {name: "PC-4", id: "PC-4"}],
      events: this.eventArray
    });

    // await this.getBookedTimeSlot(this.convertDate(evt1),"PC-1")

    for(var i=1; i<=6; i++){
      await this.updateSlotBookingPC(this.convertDate(evt1),"PC-"+i)
    }

    document.getElementsByClassName("hidem")[0].classList.add("hideme");
    document.getElementsByClassName("hidem")[1].classList.add("hideme")

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
    try{
      document.getElementsByClassName("scheduler_default_corner")[0].children[1].innerText="CRAL LAB"
      document.getElementsByClassName("scheduler_default_corner")[0].children[1].classList.add("mystyle");
    }catch(e){}
  }

  bookTimeSlot = (currentPC,currentDate)=>{
    debugger
    if(!this.finalBookedArray || this.finalBookedArray.length<1 || !currentPC || !currentDate){
      alert("Please select any time slot to book");
      return
    }
    currentPC=currentPC.substr(1);
    axios.get("http://localhost:3000/bookTimeSlot?bookids="+this.finalBookedArray+":::"+currentDate+":::"+currentPC+":::"+window.localStorage.getItem("userId"))
    .then((response) => {
        console.log(response.data.a);
        if(response.data.a==1){
          alert("Time Slot Already Booked For this Interval");
        }else{
          alert("Time Slot Succesfull Booked");
          // window.location.reload();
        }
    });
  }

  convertDate = (inputFormat) => {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
  }

  render() {
    var mypc="pc1"
    const pcCompanies = [
      { label: "PC-1", value: "#PC-1" },
      { label: "PC-2", value: "#PC-2" },
      { label: "PC-3", value: "#PC-3" },
      { label: "PC-4", value: "#PC-4" },
    ];
    var {...config} = this.state;
    var style = {
      background: 'blue',
      fontSize: 200
    };
    // Render the Calendar
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    var isAdmin=localStorage.getItem("role").toLowerCase()=="lab";

    var btnClass = classNames({
      'textLeft': true,
      'disabled': true,
    });

    return (
      <div className="schedule-time">

        {this.state.isStreamRack && 
         <div className="button-log">
         <DropdownButton id="dropdown-basic-button"  title={localStorage.getItem("username")}>
           <Dropdown.Item onClick={()=>{
             alert("Log Out");
             localStorage.removeItem("userId");
             localStorage.removeItem("username");
             this.props.history.push("/");
             window.location.reload();
           }} href="#/action-1">Log Out</Dropdown.Item>
         </DropdownButton>
       </div>}
       
    
        
        <Tab.Container id="left-tabs-example" defaultActiveKey="third">
            <Row className="fullContainer">
              <Col lg={2} sm={2} style={{paddingTop:"40px",float:"right"}}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className={btnClass} onClick={()=>{
                      this.setState({
                        isStreamRack:true
                      })
                    }} eventKey="first">Strem Player</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link className={btnClass} onClick={()=>{
                      this.setState({
                        isStreamRack:true
                      })
                    }} eventKey="second">Strem Capture</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link className="textLeft" onClick={()=>{
                      this.setState({
                        isStreamRack:true
                      })
                    }} eventKey="third">Strem Analyzer</Nav.Link>
                  </Nav.Item>
              
                  <Nav.Item>
                    <Nav.Link className={btnClass} onClick={()=>{
                      this.setState({
                        isStreamRack:true
                      })
                    }} eventKey="fourth">Strem Storager</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link className={btnClass} onClick={()=>{
                      if(localStorage.getItem("role").toLowerCase()=="lab"){
                        this.props.history.push("boarding");
                      }else{
                        alert("Access Denied");
                      }
                    }} eventKey="fifth">Strem Rack Info</Nav.Link>
                  </Nav.Item>
                 
                </Nav>
              </Col>

              <Col lg={10} sm={10} style={{paddingTop:"40px"}}>
                <Row>
                  <Col xl={4} sm={4}>
                    <Tab.Content className="borderValue" style={{height:"100%"}}>
                      <Tab.Pane eventKey="first">
                        <Container>
                          <Row style={{paddingTop:"15px"}}>
                            <Col lg={4}>
                              <Switch
                                checked={this.state.check1}
                                id="normal-switch1"
                              ></Switch>
                              <div>
                                <Form.Label style={{cursor:"pointer"}} onClick={()=>{
                                  this.setState({
                                    pcvalue:"pc1"
                                  })
                                }}>PC-1</Form.Label>
                              </div>
                              <div>
                              {this.state.check1 ? <a target="_blank" href="./rdp.bat" target="_blank">Remote Connection</a> : <div>Remote Connection</div>}
                              </div>
                              </Col>
                            <Col lg={4}>
                              <Switch
                                onChange={()=>{}}
                                checked={this.state.check2}
                                id="normal-switch2"
                              ></Switch>
                                <div>
                                <Form.Label style={{cursor:"pointer"}} onClick={()=>{
                                  this.setState({
                                    pcvalue:"pc2"
                                  })
                                }}>PC-2</Form.Label>
                              </div>
                              {this.state.check2 ? <a target="_blank" href="./rdp.bat" target="_blank">Remote Connection</a> : <div>Remote Connection</div>}
                            </Col>
                            <Col lg={4}>
                              <Switch
                                onChange={()=>{}}
                                checked={this.state.check3}
                                id="normal-switch3"
                              ></Switch>
                                <div>
                                <Form.Label style={{cursor:"pointer"}} onClick={()=>{
                                  this.setState({
                                    pcvalue:"pc3"
                                  })
                                }}>PC-3</Form.Label>
                              </div>
                              {this.state.check3 ? <a target="_blank" href="./rdp.bat" target="_blank">Remote Connection</a> : <div>Remote Connection</div>}
                            </Col>
                            <Col lg={4} style={{paddingTop:"15px"}}>
                              <Switch
                                onChange={()=>{}}
                                checked={this.state.check4}
                                id="normal-switch4"
                              ></Switch>
                                <div>
                                <Form.Label style={{cursor:"pointer"}} onClick={()=>{
                                  this.setState({
                                    pcvalue:"pc4"
                                  })
                                }}>PC-4</Form.Label>
                              </div>
                              {this.state.check4 ? <a target="_blank" href="./rdp.bat" target="_blank">Remote Connection</a> : <div>Remote Connection</div>}
                            </Col>
                          </Row>
                        </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Container>
                          <Row style={{paddingTop:"15px"}}>
                            <Col lg={3}>
                              <Switch
                                onChange={()=>{}}
                                checked={this.state.check5}
                                id="normal-switch4"
                              ></Switch>
                                <div>
                                <Form.Label style={{cursor:"pointer"}} onClick={()=>{
                                  this.setState({
                                    pcvalue:"pc5"
                                  })
                                }}>PC-5</Form.Label>
                              </div>
                              {this.state.check5 ? <a target="_blank" href="./rdp.bat" target="_blank">Remote Connection</a> : <div>Remote Connection</div>}
                            </Col>
                          </Row>
                        </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Container>
                            <Row style={{paddingTop:"15px"}}>
                              <Col lg={3}>
                                <Switch
                                  onChange={()=>{}}
                                  checked={this.state.check6}
                                  id="normal-switch4"
                                ></Switch>
                                  <div>
                                  <Form.Label style={{cursor:"pointer"}} onClick={()=>{
                                  this.setState({
                                    pcvalue:"pc6"
                                  })
                                }}>PC-6</Form.Label>
                                </div>
                                {this.state.check6 ? <a target="_blank" href="./rdp.bat" target="_blank">Remote Connection</a> : <div>Remote Connection</div>}
                              </Col>
                            </Row>
                          </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                        <Container>
                            <Row style={{paddingTop:"15px"}}>
                                
                            </Row>
                          </Container>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>

                  <Col xl={4} sm={4} style={{marginLeft:"-10px"}}>
                    {/* <div style={{marginLeft:"190px"}}>{this.state.pcvalue}</div> */}
                    <img className="borderValue" style={{height:"300px", width:"100%", padding:"10px"}} src={"./"+this.state.pcvalue+".jpeg"}></img>
                  </Col>

                  <Col xl={4} sm={4} style={{marginLeft:"-10px"}}>
                    {/* <div style={{marginLeft:"190px"}}>{this.state.pcvalue}</div> */}
                    <img className="borderValue" style={{height:"300px", width:"100%", padding:"10px"}} src={"./"+this.state.pcvalue+".jpeg"}></img>
                  </Col>
                </Row>

            
                <Row className="borderValue" style={{marginTop:"80px", marginLeft:"0px", padding:"10px", marginRight:"15px"}}>
                <Col xl={4} sm={4}>
                    <InfiniteCalendar style={{paddingTop:"60px"}}
                        displayOptions={{
                          showOverlay: false,
                          shouldHeaderAnimate: false
                        }}
                        // width={350}
                        height={210}
                        // selected={today}
                        // disabledDays={[0,6]}
                        // minDate={lastWeek}
                        onSelect={async(evt)=>{
                          var evt2 = evt.toString().split(" ");
                          evt2.splice(4)
                          var evt1 = evt2.join(" ");
                          this.currentSelectedDate=this.convertDate(evt1)

                          this.eventArray=[];
                          debugger
                          for(var i=1; i<=6; i++){
                            await this.getBookedTimeSlot(this.currentSelectedDate, "PC-"+i);
                          }

                          this.setState({
                            resources: [{name: "PC-1", id: "PC-1"}, {name: "PC-2", id: "PC-2"}, {name: "PC-3", id: "PC-3"}, {name: "PC-4", id: "PC-4"},{name: "PC-5", id: "PC-5"},{name: "PC-6", id: "PC-6"}],
                            events: this.eventArray
                          });

                          for(var i=1; i<=6; i++){
                            await this.updateSlotBookingPC(this.currentSelectedDate,"PC-"+i)
                          }
                      
                          console.log(this.currentSelectedDate);
                        }}
                    />
                  </Col>
                  
                  <Col xl={8} sm={8}>
                       
                       
                    <AbhaasScheduler className="abhaas-scheduler" 
                      {...config}
                      ref={component => {
                        this.scheduler = component && component.control;
                      }}
                    />
                        
                  
                  </Col>
                       


                </Row>

              </Col>
            </Row>
          </Tab.Container>

          {/* <div className="drop-down"> */}
            {/* <DropdownButton id="dropdown-basic-button" variant="success" onSelect={async(evt)=>{
                        // this.currentPCSelected=evt;
                        // console.log(this.currentPCSelected);
                        // debugger
                        // await this.getBookedTimeSlot(this.currentSelectedDate,evt.substr(1))

                      }} title="Select Computer Category">
                        <Dropdown.Item href="#PC-1">PC-1</Dropdown.Item>
                        <Dropdown.Item href="#PC-2">PC-2</Dropdown.Item>
                        <Dropdown.Item href="#PC-3">PC-3</Dropdown.Item>
            </DropdownButton>               */}
          {/* </div> */}
    
      </div>
    );
  }
}

export default Scheduler;



