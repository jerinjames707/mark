import React, { useState } from 'react'
import Header from './Header'

const Student = () => {
    var [name,setname]=useState("")
    var [addno,setaddno]=useState("")
    var [cgpa,setcgpa]=useState("")
    const setData=()=>{
        var data={"name":name,"addno":addno,"cgpa":cgpa}
        console.log(data)
    }
  return (
    <div>
        <Header/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Name</label>
                    <input onChange={(e)=>{setname(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Addmission no</label>
                    <input onChange={(e)=>{setaddno(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">CGPA</label>
                    <input onChange={(e)=>{setcgpa(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={setData} class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Student