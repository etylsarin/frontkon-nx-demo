import * as React from 'react';
import Frontkon, { FrontkonProps } from './frontkon';

describe(Frontkon.name, () => {
  let props: FrontkonProps;

  beforeEach(() => {
    props = {};
  });

  it('renders', () => {
    cy.mount(<Frontkon {...props} />);
  });
});
