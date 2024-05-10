import type { Meta, StoryObj } from '@storybook/react'
// import { Button } from './Button'
import { Card } from '@ui/components/card'


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    title: { control: 'text'},
    href: { control: 'text' },
  },
  args: { className: 'bg-red-500' },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    className: 'bg-red-700',
    title: 'Link with red Text',
    href: 'Color',
    children: <p>Card Description</p>
  },
};

export const Secondary: Story = {
  args: {
    className: 'bg-blue-700',
    title: 'Link with Blue Text',
    href: 'Color',
    children: <p>Card Description</p>
  },
};

export const Large: Story = {
  args: {
    className: 'bg-green-700',
    title: 'Link with green Text',
    href: 'Color',
    children: <p>Card Description</p>
  },
};

export const Small: Story = {
  args: {
    className: 'bg-yellow-700',
    title: 'Link with yellow Text',
    href: 'Color',
    children: <p>Card Description</p>
  },
};
