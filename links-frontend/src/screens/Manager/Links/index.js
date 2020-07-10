import React from 'react';
import { Link } from 'react-router-dom'
import Layout from '../../../Layout/Manager/index';
const Links = ()=>{
    return (
      <Layout>
            <div className="col">
              <h1>Links</h1>
            </div>
            <div className="col text-right align-self-bottom pt-2">
              <Link to="/manage/links/create" className="btn btn-primary">
                Add
              </Link>
            </div>
            <div className='pb-2 pt-2 pl-3 pr-3 d-flex flex-row justify-content-between'>
                    <div className="pr-3">
                      <img src="https://via.placeholder.com/100" alt="Link icon" />
                    </div>
                    <div className="align-self-center">
                      <span className="text-primary clearfix">"l"</span>
                      <span className="text-primary clearfix">ink.url</span>
                    </div>
                    <div className="ml-auto p-2 clearfix">
                      <Link to={`/manage/links/edit/`} className="mr-2">
                        Edit
                      </Link>
                      <button className="btn btn-clear" >
                        Delete
                      </button>
                    </div>
                  </div>
        </Layout>
               
   
            
                  )
         
    }
    
    export default Links;