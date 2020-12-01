import React, { useState } from 'react';
import Toolbar from '../common/Toolbar';
import Container from '../common/Container';

const ScreenLayout = ({ headerTitle, children }) => {
  const [toolbarPressCounter, setToolbarPressCounter] = useState(0);
  const onToolbarPress = () => setToolbarPressCounter(toolbarPressCounter + 1);

  return (
    <Container>
      <Toolbar title={headerTitle} onPress={onToolbarPress} />
      {children(toolbarPressCounter)}
    </Container>
  );
};

export default ScreenLayout;
