import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
    var [viewstd,setstd]=useState([])
    
    axios.get("http://localhost:4000/api/viewall").then(
        (response)=>{
            console.log(response.data)
            setstd(response.data)
           
        }
    )
    
  return (
    <div>

<div>
<Header/>
    <div>
        <div class="container">
            <div class="row ">
                 <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <table class="table table-success table-striped" >
                         <thead>
                             <tr>
                                 <th scope="col">Name</th>
                                 <th scope="col">Adm no</th>
                                 <th scope="col">CGPA</th>
                                                                         
                                 </tr>
                                 </thead>
                                 <tbody>
                                          {
                                           viewstd.map((value,key)=>{
                                                return <tr>
                                                <th><p class="card-text">{value.name}</p></th>
                                                <td><p class="card-text">{value.adno}</p></td>
                                                <td><p class="card-text">{value.cgpa}</p></td>
                                    
                                                
                                        

                                                </tr>
                                            })}
                                            </tbody>
                                            </table>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
  )
}


export default View