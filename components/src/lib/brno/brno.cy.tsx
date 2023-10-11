import * as React from 'react';
import Brno, { BrnoProps } from './brno';

describe(Brno.name, () => {
  let props: BrnoProps;

  beforeEach(() => {
    props = {};
  });

  it('renders', () => {
    cy.mount(<Brno {...props} />);
  });
});
