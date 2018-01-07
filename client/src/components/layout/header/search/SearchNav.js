import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SearchNav = ({ handleChange, handleSubmit, value }) => (
  <form onSubmit={handleSubmit}
        className="form-inline my-2 my-lg-0">
    <Field className="form-control mr-sm-2"
           component="input"
           name="search"
           onChange={handleChange}
           type="text"
           value={value}/>
    <button className="btn btn-outline-success my-2 my-sm-0"
            type="submit">
      Search
    </button>
  </form>
);

export default reduxForm({
  form: 'searchPublic'
})(SearchNav);
