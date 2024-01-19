import type { Meta, StoryObj } from '@storybook/react'
import { Misty, MistyClose } from './Misty'

const meta = {
  title: 'UI/Misty',
  component: Misty,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Misty>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {},
  render: () => (
    <Misty>
      <MistyClose />
      <div>'hi'</div>
    </Misty>
  ),
}

export const Disabled: Story = {
  args: {},
}
