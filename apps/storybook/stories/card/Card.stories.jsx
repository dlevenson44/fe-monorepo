import { fn } from '@storybook/test';

import { Card } from '@ui/components'

export default {
  title: 'Example/Card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    title: 'Card Title',
    children: () => <p>This is a card Child</p>,
    href: 'https://google.com'
  },
};

export const CardStory = {
  args: {
    title: 'Card Title',
    children: () => <p>This is a card Child</p>,
    href: 'https://google.com'
  }
};
