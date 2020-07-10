import React from'react';
import {Link} from 'react-router-dom';
import Layout from '../../../../Layout/Manager/index';

const Create = ()=>{
return (
    <Layout>
      <h1>Create Link</h1>
      <div>
        <form>
          <div className="form-group">
            <label>Label</label>
            <input type="text" className="form-control" name="label" />
          </div>
          <div className="form-group">
            <label>Url</label>
            <input type="text" className="form-control" name="url" />
          </div>
          <div className="from-group form-check">
            <label className="form-check-label">
              <input type="checkbox" name="isSocial" />
              <span className="form-check-sign"></span>
              Is Social
            </label>
          </div>
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Create;