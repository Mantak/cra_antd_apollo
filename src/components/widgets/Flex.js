import React from 'react';
import styled from 'styled-components';

// JustifyValues = 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end';
// AlignValues = 'stretch' | 'center' | 'baseline' | 'flex-start' | 'flex-end';

const Flex = props => {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex: ${({ auto }) => (auto ? '1 1 auto' : 'initial')};
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  min-height: 0;
  min-width: 0;
`;

export default Flex;
