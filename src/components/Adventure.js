import React from 'react';
import styled from 'styled-components';

function Adventure() {

  const Box = styled.section`
    border: 2px black solid;
    border-radius: 15px;
    max-width: 400px;
    margin: 50px;
    padding: 5px;

  `;


  return (
    <React.Fragment>
      <Box>
        <h3>Adventure Name</h3>
      </Box>

    </React.Fragment>
  );
};

export default Adventure;