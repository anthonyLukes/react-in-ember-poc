// app/components/my-react-component.js
import React from 'react';
import styled from 'styled-components'
import WithEmberSupport from 'ember-react-components';
import Anchor from '../react/Anchor'

const Div = styled.div`
    color: green;
`;

@WithEmberSupport
export default class extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <Div>Hello, {name} <Anchor href="http://google.com">A link</Anchor></Div>
    );
  }
}