import { render } from '@testing-library/react';

import Brno from './brno';

describe('Brno', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Brno />);
    expect(baseElement).toBeTruthy();
  });
});
