import React from 'react';

import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.main`
  background-color: orange;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The wild Oasis</H1>
        <Button onClick={() => alert('Check in')}>Check In</Button>
        <Button onClick={() => alert('Check in')}>Check Out</Button>

        <Input type="number" placeholder="Number of guess" />
      </StyledApp>
    </>
  );
};

export default App;

// goto: 6 Styled Components Props and css functions
