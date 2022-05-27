import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
  
    const[data,setData]=useState([{  "name":"",  "cgpa":""  }])
    const [adno,setAdno]=useState("")
    const Searchapi=()=>{
        const valueread={"adno":adno}
        console.log(valueread)
        axios.post("http://localhost:4000/api/search",valueread).then((respose)=>{
            setData(respose.data)
        })
    }
  return (
    <div>
        <Header/>
        <div className="Container">
    <div className="row g-2">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Admissionno</label>
                    <input onChange={(e)=>setAdno(e.target.value)}  type="text" className="form-control"/>
                </div>
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  className="btn btn-success" onClick={Searchapi}>Search</button>
                    
                </div>
            </div>
            
                {data.map( (value,key)=>{
                    return  <div className="row g-3">
                
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">Name</label>
                        <input  type="text" value={value.name} className="form-control"/>
                    </div>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Cgpa</label>
                        <input type="text" value={value.cgpa} className="form-control"/>
                        
                    </div>
                </div>
                })}
            
        </div>

    </div>

</div></div>
  )
}

export default Search