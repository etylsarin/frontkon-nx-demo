import { render } from '@testing-library/react';

import Frontkon from './frontkon';

describe('Frontkon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Frontkon />);
    expect(baseElement).toBeTruthy();
  });
});
