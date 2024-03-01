import { Misty, MistyDescription, MistyClose, MistyBody } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'UI/Misty',
  component: Misty,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'object',
      },
    },
    contents: {
      control: {
        type: 'object',
      },
    },
    preLoad: {
      control: {
        type: 'boolean',
      },
    },
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    style: {
      control: {
        type: 'object',
      },
    },
    width: {
      control: {
        type: 'text',
      },
    },
    height: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Misty>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: (
      <MistyBody>
        <MistyClose />
        <MistyDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt placeat nostrum doloribus aut ex veniam
          perspiciatis expedita, cupiditate dolor rem quod eaque doloremque cum quisquam sit illum repellendus
          provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt placeat nostrum doloribus aut
          ex veniam perspiciatis expedita, cupiditate dolor rem quod eaque doloremque cum quisquam sit illum repellendus
          provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt placeat nostrum doloribus aut
          ex veniam perspiciatis expedita, cupiditate dolor rem quod eaque doloremque cum quisquam sit illum repellendus
          provident.
        </MistyDescription>
      </MistyBody>
    ),
    contents: (
      <div style={{ padding: '2rem' }}>
        <button type="button">Contents</button>
      </div>
    ),
    preLoad: false,
    isOpen: true,
    style: { backgroundColor: 'powderblue' },
  },
}

export const Preload: Story = {
  args: {
    children: (
      <MistyBody
        style={{
          background: `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
        linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
        linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)`,
        }}
      >
        <MistyClose />
        <MistyDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt placeat nostrum doloribus aut ex veniam
          perspiciatis expedita, cupiditate dolor rem quod eaque doloremque cum quisquam sit illum repellendus
          provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt placeat nostrum doloribus aut
          ex veniam perspiciatis expedita, cupiditate dolor rem quod eaque doloremque cum quisquam sit illum repellendus
          provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt placeat nostrum doloribus aut
          ex veniam perspiciatis expedita, cupiditate dolor rem quod eaque doloremque cum quisquam sit illum repellendus
          provident.
        </MistyDescription>
      </MistyBody>
    ),
    contents: (
      <div style={{ padding: '2rem' }}>
        <button type="button">Contents</button>
      </div>
    ),
    preLoad: true,
    isOpen: true,
    style: {},
    width: '500px',
    height: '500px',
  },
}

export const Verified: Story = {
  args: {
    children: (
      <MistyBody>
        <MistyClose />
        <MistyDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt placeat nostrum doloribus aut ex veniam
          perspiciatis expedita, cupiditate dolor rem quod eaque doloremque cum quisquam sit illum repellendus
          provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt placeat nostrum doloribus aut
          ex veniam perspiciatis expedita, cupiditate dolor rem quod eaque doloremque cum quisquam sit illum repellendus
          provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt placeat nostrum doloribus aut
          ex veniam perspiciatis expedita, cupiditate dolor rem quod eaque doloremque cum quisquam sit illum repellendus
          provident.
        </MistyDescription>
      </MistyBody>
    ),
    contents: (
      <div style={{ padding: '2rem' }}>
        <button type="button">Contents</button>
      </div>
    ),
    preLoad: false,
    isOpen: false,
    style: { backgroundColor: 'powderblue' },
    width: '1024px',
    height: '100%',
  },
}
