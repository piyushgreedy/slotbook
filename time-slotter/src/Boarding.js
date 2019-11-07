import React, { Component } from 'react';
import {Button, FormGroup, FormControl, Form, Container} from "react-bootstrap";
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Row, Col, ListGroup } from 'react-bootstrap';
import {Tab,Nav, Dropdown, DropdownButton, ToggleButton} from 'react-bootstrap'
import Avatar from 'react-toolbox/lib/avatar';
import Select from 'react-select';
import { ExportToCsv } from 'export-to-csv';

const options = [
    { value: 'none', label: 'None' },
    { value: 'Name 1', label: 'Name 1' },
    { value: 'Name 2', label: 'Name 2' },
    { value: 'Name 3', label: 'Name 3' },
    { value: 'Name 4', label: 'Name 4' },
    { value: 'Name 5', label: 'Name 5' },
    { value: 'Name 6', label: 'Name 6' },
    { value: 'Name 7', label: 'Name 7' },
    { value: 'Name 8', label: 'Name 8' },
    { value: 'Name 9', label: 'Name 9' }
];

var data = [
    {
      name: 'Test 1',
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 4',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
  ];

const csvOptions = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'My Awesome CSV',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  };

let initialData = {
    "names": [
        {"id": 1, "name": "Airtel", "funcValue": "none", "portvalue": "403"}, 
        {"id": 2, "name": "Vodafone", "funcValue": "none", "portvalue": "403"}, 
        {"id": 3, "name": "Provider 1", "funcValue": "none", "portvalue": "403"},
        {"id": 4, "name": "Provider 2", "funcValue": "none", "portvalue": "403"},
        {"id": 5, "name": "Provider 3", "funcValue": "none", "portvalue": "403"},
        {"id": 6, "name": "Provider 4", "funcValue": "none", "portvalue": "403"},
        {"id": 7, "name": "Provider 5", "funcValue": "none", "portvalue": "403"},
        {"id": 8, "name": "Provider 7", "funcValue": "none", "portvalue": "403"},
        {"id": 9, "name": "Provider 8", "funcValue": "none", "portvalue": "403"}
]}

const namesData=["none","none","none","none","none","none","none","none","none"];
const portNumber=["403","200","100","560","120","282","328","2312","123"]

const GithubIcon = () => (
    <svg viewBox="0 0 284 277">
    <g><path d="M141.888675,0.0234927555 C63.5359948,0.0234927555 0,63.5477395 0,141.912168 C0,204.6023 40.6554239,257.788232 97.0321356,276.549924 C104.12328,277.86336 106.726656,273.471926 106.726656,269.724287 C106.726656,266.340838 106.595077,255.16371 106.533987,243.307542 C67.0604204,251.890693 58.7310279,226.56652 58.7310279,226.56652 C52.2766299,210.166193 42.9768456,205.805304 42.9768456,205.805304 C30.1032937,196.998939 43.9472374,197.17986 43.9472374,197.17986 C58.1953153,198.180797 65.6976425,211.801527 65.6976425,211.801527 C78.35268,233.493192 98.8906827,227.222064 106.987463,223.596605 C108.260955,214.426049 111.938106,208.166669 115.995895,204.623447 C84.4804813,201.035582 51.3508808,188.869264 51.3508808,134.501475 C51.3508808,119.01045 56.8936274,106.353063 65.9701981,96.4165325 C64.4969882,92.842765 59.6403297,78.411417 67.3447241,58.8673023 C67.3447241,58.8673023 79.2596322,55.0538738 106.374213,73.4114319 C117.692318,70.2676443 129.83044,68.6910512 141.888675,68.63701 C153.94691,68.6910512 166.09443,70.2676443 177.433682,73.4114319 C204.515368,55.0538738 216.413829,58.8673023 216.413829,58.8673023 C224.13702,78.411417 219.278012,92.842765 217.804802,96.4165325 C226.902519,106.353063 232.407672,119.01045 232.407672,134.501475 C232.407672,188.998493 199.214632,200.997988 167.619331,204.510665 C172.708602,208.913848 177.243363,217.54869 177.243363,230.786433 C177.243363,249.771339 177.078889,265.050898 177.078889,269.724287 C177.078889,273.500121 179.632923,277.92445 186.825101,276.531127 C243.171268,257.748288 283.775,204.581154 283.775,141.912168 C283.775,63.5477395 220.248404,0.0234927555 141.888675,0.0234927555" /></g>
    </svg>
);
const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
});

const grid = 8;

const getItemStyleOne = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    height:70,
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",
    // styles we need to apply on draggables
    ...draggableStyle
});

const getItemStyleTwo = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    height:70,
    // change background colour if dragging
    background: isDragging ? "lightcoral" : "lightskyblue",
    // styles we need to apply on draggables
    ...draggableStyle
});

const getItemStyleThree = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    height:70,
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "blanchedalmond",
    // styles we need to apply on draggables
    ...draggableStyle
});

const reorder = (list, startIndex, endIndex) => {
    console.log(list)
    const result = Array.from(list);
  
    const [removed] = result.splice(startIndex, 1);
    console.log(removed);
  
    result.splice(endIndex, 0, removed);
  
    return result;
  };


      
class Boarding extends Component {
    constructor(props) {
      super(props);
      this.onDragEnd = this.onDragEnd.bind(this);
      this.state = {
        items: initialData,
        namesData: namesData,
        portNumber:portNumber
      };
    }

    componentDidMount=()=>{
        axios.get("http://localhost:3000/getNameSlots")
        .then((response) => {
            // console.log(response.data.names);
            let responseData=JSON.parse(response.data.names);

            let newNamesArray=responseData.names.map((elem,position)=>{
                return elem["funcValue"]
            })
            let newPortArray=responseData.names.map((elem,position)=>{
                return elem["portvalue"]
            })
                
            this.setState({
                items : initialData,
                namesData: newNamesArray,
                portNumber: newPortArray
            })
        });
    }

    handleChange = (selectedOption)=>{
       console.log(selectedOption);
    }

    updateItemsData = ()=>{
        let updatedAllData={...this.state}
        let itemsData=updatedAllData.items;
        let namesNewData=updatedAllData.namesData;
        let portAllData=updatedAllData.portNumber;
        console.log(this.state.namesData);
        let newItemsData=itemsData.names.map((elem,pos)=>{
            elem["funcValue"]=namesNewData[pos];
            elem["portvalue"]=portAllData[pos];
            return elem;
        })
        itemsData["names"]=newItemsData;
        console.log(itemsData);

        axios.get("http://localhost:3000/updateNameSlots?bookids="+JSON.stringify(itemsData)+":::")
        .then((response) => {
            console.log(response);
        });
    }

    onDragEnd(result) {
        // dropped outside the list
        console.log(result);
        if (!result.destination) {
          return;
        }
    
        if(result.destination.droppableId=="droppableOne"){
            console.log("droppableOnne");
        }

        if(result.destination.droppableId=="droppableTwoa"){
            let namesData=this.state.namesData;
            let startIndex=result.source.index;
            let destinationIndex=result.destination.index;
            let namesNewArray=Array.from(namesData);
            const [removed] = namesNewArray.splice(startIndex, 1);
            namesNewArray.splice(destinationIndex, 0, removed);
            this.setState({
                namesData:namesNewArray
            })
        }

        if(result.destination.droppableId=="droppableThree"){
            console.log("droppableThree");
            let portData=this.state.portNumber;
            let startIndex=result.source.index;
            let destinationIndex=result.destination.index;
            let portNewArray=Array.from(portData);
            const [removed] = portNewArray.splice(startIndex, 1);
            portNewArray.splice(destinationIndex, 0, removed);
            this.setState({
                portNumber:portNewArray
            })
        }

        setTimeout(()=>{
            this.updateItemsData();
        },500);
        
        // const items = reorder(
        //   this.state.items,
        //   result.source.index,
        //   result.destination.index
        // );
    
        // this.setState({
        //   items
        // });
    }

    render() {
        return (
            <div>
                  <Row> 
                <Col xs={3}>
                    <Button style={{width:"70%",marginTop:"20px",marginBottom:"20px",marginLeft:"2px"}} variant="success">Providers</Button>
                    <DragDropContext style={{margin:"10px"}} onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppableOne">
                            {(provided, snapshot)=>(
                                <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                                    {this.state.items.names.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.name} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                style={getItemStyleOne(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                    )}
                                                >
                                                {/* <img  style={{height:"20px", width:"100px", marginRight:"10px"}} src="./voda.jpeg"></img><span></span> */}
                                                {item.name}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Col>

                <Col xs={2}>
                    <Button style={{width:"70%",marginTop:"20px",marginBottom:"20px"}} variant="success">Band Value</Button>
                    <DragDropContext style={{margin:"10px"}} onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppablefour">
                            {(provided, snapshot)=>(
                                <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                                    {this.state.items.names.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.name} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                style={getItemStyleOne(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                    )}
                                                >
                                                Dual Band
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Col>


                <Col xs={2}>
                    <Button style={{width:"70%",marginTop:"20px",marginBottom:"20px"}} variant="success">Port Number</Button>
                    <DragDropContext style={{margin:"10px"}} onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppablefour">
                            {(provided, snapshot)=>(
                                <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                                    {this.state.items.names.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.name} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                style={getItemStyleOne(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                    )}
                                                >
                                                Port Number 2
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Col>


                <Col xs={3}>
                    <Button style={{width:"70%",marginTop:"20px",marginBottom:"20px"}} variant="success">Used Names</Button>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppableTwo">
                            {(provided, snapshot)=>(
                                <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                                    {this.state.namesData.map((item, index) => (
                                        <Draggable key={index} draggableId={index} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                style={getItemStyleTwo(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                    )}
                                                >
                                                <span>
                                                {/* {item} */}
                                                <Select
                                                    id={"select-"+index}
                                                    value={{ value: item, label: item }}
                                                    onChange={(selectedOption)=>{
                                                        // this.nArray=[];
                                                        // for(var i=0;i<9 ; i++){
                                                        //     let a =document.getElementById("select-"+i).getElementsByClassName("css-1uccc91-singleValue")[0].innerText;
                                                        //     this.nArray.push(a);
                                                        // }
                                                        // console.log(this.nArray);
                                                        // this.setState({
                                                        //     namesData:nArray
                                                        // })
                                                        
                                                        let namesData=this.state.namesData;
                                                        namesData[index]=selectedOption.value;
                                                        this.setState({
                                                            namesData:namesData
                                                        })
                                                        
                                                        setTimeout(()=>{
                                                            this.updateItemsData();
                                                            // window.location.reload();
                                                        },1000)
                                                        
                                                    }}
                                                    options={options}
                                                />
                                                </span> 
                                               </div>
                                            )}
                                        </Draggable>
                                    ))}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Col>

                <Col xs={2}>
                    <Button style={{width:"70%",marginTop:"20px",marginBottom:"20px"}} variant="success">RF Port Number</Button>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppableThree">
                            {(provided, snapshot)=>(
                                <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                                    {this.state.portNumber.map((item, index) => (
                                        <Draggable key={item} draggableId={item} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                style={getItemStyleThree(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                    )}
                                                >
                                                 {item}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Col>
            </Row>
                <Row style={{alignItems:"center"}}>
                    <Col xs={4}></Col> 
                    <Col xs={4}>
                        <Button style={{width:"100%",marginTop:"20px",marginBottom:"20px"}} variant="success" onClick={()=>{
                            const csvExporter = new ExportToCsv(options);
                            console.log(this.state.items.names);
                            csvExporter.generateCsv(this.state.items.names);
                        }}>
                            Export To CSV
                        </Button>
                    </Col>                                          
                    <Col xs={4}></Col>            
                </Row>
            </div>
        )
    }

    onDrop(data) {
        console.log(this)
    }
  }

export default (withRouter)(Boarding)