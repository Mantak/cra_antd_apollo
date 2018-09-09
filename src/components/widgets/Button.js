import * as React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const RealButton = styled.button`
  display: inline-block;
  margin: 0;
  padding: 0;
  border: 0;
  background: blue;
  color: green;
  border-radius: 4px;
  font-size: 15px;
  height: 36px;
  text-decoration: none;
  flex-shrink: 0;
  outline: none;
  cursor: pointer;

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  &:hover {
    background: red;
  }

  svg {
    position: relative;
    top: 0.05em;
  }

  &:disabled {
    opacity: 0.8;
    cursor: default;
  }

  ${props =>
    props.light &&
    `
    color: grey;
    background: transparent;
    border: 1px solid grey;

    &:hover {
      background: transparent;
    }
  `} ${props =>
  props.neutral &&
  `

  `} ${props =>
  props.danger &&
  `
  `};
`;

const Label = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${props => props.hasIcon && 'padding-left: 2px;'};
`;

const Inner = styled.span`
  padding: 0 12px;
  display: flex;
  line-height: 28px;
  justify-content: center;
  align-items: center;

  ${props => props.hasIcon && (props.small ? 'padding-left: 6px;' : 'padding-left: 10px;')};
`;

export default function Button({ type = 'text', icon, children, value, ...rest }) {
  const hasText = children !== undefined || value !== undefined;
  const hasIcon = icon !== undefined;

  return (
    <RealButton {...rest}>
      <Inner hasIcon={hasIcon}>
        {hasIcon && icon}
        {hasText && <Label hasIcon={hasIcon}>{children || value}</Label>}
      </Inner>
    </RealButton>
  );
}
