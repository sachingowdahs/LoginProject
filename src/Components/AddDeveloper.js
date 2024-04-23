import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function AddDeveloper() {

  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Name, setName] = useState()
  const [Education, setEducation] = useState()
  const [PassedYear, setPassedYear] = useState()
  const [Skills, setSkills] = useState()
  const [Cnumber, setCnumber] = useState()
  const [Email, setEmail] = useState()

  const [data, setdata] = useState([])
  const [dataRemove, setdataRemove] = useState()



  const data1 = {id : data?.length+1,Name : Name , Education : Education ,PassedYear:PassedYear,Skills:Skills, Cnumber:Cnumber,Email:Email}

  const Pusharray = () => {
    if(Name && Education && PassedYear && Skills && Cnumber && Email){
       setdata(oldArray => [...oldArray,data1])
    setShow(false)
    alert("Employee Added")
    }
    else{
      alert("Enter all fields")

    }
   
   
  }

  const RemoveItem = (data) => {
console.log(data,"selected data");
setSmShow(true)

  }

  const Removedata = () => {
    data.splice(data.findIndex(a => a.id === dataRemove.id) , 1)
    setSmShow(false)
    alert("Employee deleted...")

  }


   
    return (
<div style={{height:"80vh"}}>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Developer</Modal.Title>
        </Modal.Header>
        <Modal.Body>    <div class="modal-body">
      <input type="text" placeholder="Name" className="textInputC" onChange={(e)=>{setName(e.target.value)}}/>
      <input type="text" placeholder="Education" className="textInputC" onChange={(e)=>{setEducation(e.target.value)}}/>
      <input type="text" placeholder="Passed Out Year" className="textInputC" onChange={(e)=>{setPassedYear(e.target.value)}}/>
      <input type="text" placeholder="Skills" className="textInputC" onChange={(e)=>{setSkills(e.target.value)}}/>
      <input type="number" placeholder="Contact Number" className="textInputC" onChange={(e)=>{setCnumber(e.target.value)}}/>
      <input type="email" placeholder="Email" className="textInputC" onChange={(e)=>{setEmail(e.target.value)}}/>


      </div></Modal.Body>
        <Modal.Footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
        <button type="button" class="btn btn-primary" style={{backgroundColor:"#002a5c"}} onClick={Pusharray}>ADD</button>
        </Modal.Footer>
      </Modal>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
           Are you sure...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-6'>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{setSmShow(false)}}>CANCEL</button>

            </div>
            <div className='col-lg-6' style={{textAlign:"end"}}>
        <button type="button" class="btn btn-primary" style={{backgroundColor:"red"}} onClick={Removedata}>DELETE</button>
        </div>
        </div></Modal.Body>

             
      </Modal>
  

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Developer</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input type="text" placeholder="Name" className="textInputC" onChange={(e)=>{setName(e.target.value)}}/>
      <input type="text" placeholder="Education" className="textInputC" onChange={(e)=>{setEducation(e.target.value)}}/>
      <input type="text" placeholder="Passed Out Year" className="textInputC" onChange={(e)=>{setPassedYear(e.target.value)}}/>
      <input type="text" placeholder="Skills" className="textInputC" onChange={(e)=>{setSkills(e.target.value)}}/>
      <input type="text" placeholder="Contact Number" className="textInputC" onChange={(e)=>{setCnumber(e.target.value)}}/>
      <input type="text" placeholder="Email" className="textInputC" onChange={(e)=>{setEmail(e.target.value)}}/>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
        <button type="button" class="btn btn-primary" style={{backgroundColor:"#002a5c"}} onClick={Pusharray}>ADD</button>
      </div>
    </div>
  </div>
</div>


    <div className='row' style={{margin:"1% 2%"}}>
        <div className='col-lg-6' style={{textAlign:"start"}}>
            <h4 style={{color:"#002a5c"}}>
            Developers List

            </h4>
        </div>
        <div className='col-lg-6' style={{textAlign:"end"}}>
        <Button variant="primary" onClick={handleShow} style={{backgroundColor:"#002a5c"}}>
  + Add Developer
</Button>

        </div>

    </div>
			
<table class="table" >
  <thead>
    <tr>
      <th scope="col">SL.No</th>
      <th scope="col">Name</th>
      <th scope="col">Education</th>
      <th scope="col">Passed Out year</th>
      <th scope="col">Skills</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>




    </tr>
  </thead>
  <tbody class="table-group-divider">
    {data?.map((item,index)=>{
      return(
        <tr>
        <th scope="row">{index+1}</th>
        <td>{item?.Name}</td>
        <td>{item?.Education}</td>
        <td>{item?.PassedYear}</td>
        <td>{item?.Skills}</td>
        <td>{item?.Cnumber}</td>
        <td>{item?.Email}</td>
        <td><i class='fa fa-trash' style={{color:"red",fontSize:"20px"}} onClick={()=>RemoveItem(item)}></i></td>

  
      </tr>
      )
    })}
   
    
  </tbody>
</table> 
            </div>
    );
}

export default AddDeveloper;