import type { Meta, StoryObj } from '@storybook/react'
import { Misty, MistyClose, MistyDescription } from './Misty'

const meta = {
  title: 'UI/Misty',
  component: Misty,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Misty>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: { width: '300px', height: '200px' },
  render: () => (
    <>
      <Misty
        width="300px"
        height="200px"
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
        width="400px"
        height="100px"
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
        <MistyDescription>
          안녕Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem earum rem tempora perspiciatis. Explicabo
          cum eaque nisi, delectus perspiciatis architecto quidem quae non dolorem molestias, consequatur, aliquam
          nostrum nihil neque!
        </MistyDescription>
      </Misty>
    </>
  ),
}
