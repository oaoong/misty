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
        preLoad={false}
        contents={
          <div>
            <div>'hi'</div>
            <div>'hi'</div>
            <div>'hi'</div>
          </div>
        }
      >
        <MistyDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum adipisci expedita iusto nemo earum
          accusantium sint laborum ratione dicta rem vitae praesentium sapiente nam saepe ipsum magnam, eos et
          voluptatem?
        </MistyDescription>
        <MistyClose />
      </Misty>
      <Misty
        width="400px"
        height="100px"
        preLoad={true}
        contents={
          <div>
            <div>'hi'</div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum adipisci expedita iusto nemo earum
              accusantium sint laborum ratione dicta rem vitae praesentium sapiente nam saepe ipsum magnam, eos et
              voluptatem?
            </div>
            <div>'hi'</div>
            <div>'hi'</div>
            <div>'hi'</div>
          </div>
        }
      >
        <MistyClose />
        <MistyDescription style={{ filter: 'blur(2px)' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum adipisci expedita iusto nemo earum
          accusantium sint laborum ratione dicta rem vitae praesentium sapiente nam saepe ipsum magnam, eos et
          voluptatem?
        </MistyDescription>
      </Misty>
    </>
  ),
}
