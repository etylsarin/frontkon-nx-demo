import type { Meta, StoryObj } from '@storybook/react';
import { Brno } from './brno';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Brno> = {
  component: Brno,
  title: 'Brno',
};
export default meta;
type Story = StoryObj<typeof Brno>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Brno!/gi)).toBeTruthy();
  },
};
