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
    <>
      <Misty
        Contents={
          <div>
            <div>'hi'</div>
            <div>'hi'</div>
            <div>'hi'</div>
          </div>
        }
      >
        <MistyClose />
      </Misty>
      <Misty
        Contents={
          <div>
            <div>'hi'</div>
            <div>'hi'</div>
            <div>'hi'</div>
            <div>'hi'</div>
            <div>'hi'</div>
          </div>
        }
      >
        <MistyClose />
      </Misty>
    </>
  ),
}

export const Disabled: Story = {
  args: {},
}
