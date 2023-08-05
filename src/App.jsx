import React from 'react';

import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyledApp = styled.main`
  /* background-color: orange; */
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The wild Oasis</Heading>

            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button onClick={() => alert('Check in')}>Check In</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert('Check in')}
              >
                Check Out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>

            <form>
              <Input type="number" placeholder="Number of guess" />
              <Input type="number" placeholder="Number of guess" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
};

export default App;

// goto: 7
