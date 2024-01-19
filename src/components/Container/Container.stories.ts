import type { Meta, StoryObj } from '@storybook/react'
import Container from './Container'

const meta = {
  title: 'UI/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {},
}