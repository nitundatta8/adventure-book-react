import React from 'react';
//import { Form } from 'react-bootstrap';
import { postAdventure } from './../actions/AdventureImage';

const NewAdventureForm = () => {

  const dataAdventure = (data) => {
    console.log(" dataAdventure ");

  }

  const uploadAction = (event) => {
    event.preventDefault();
    postAdventure(dataAdventure,
      event.target)

  };
  return (
    <React.Fragment>
      <h4>Adventure form</h4>
      <form encType="multipart/form-data" onSubmit={uploadAction.bind(this)}>
        <input
          type='hidden'
          name='UserId'
          defaultValue='1' /><br />

        <input
          type='text'
          name='location'
          placeholder='Location' /><br />
        <input
          type='text'
          name='description'
          placeholder='Description' /><br />
        <input type="file" name="ImgFile" /><br />
        <button type='submit'>Submit</button>
      </form>

    </React.Fragment>
  );
};

export default NewAdventureForm;