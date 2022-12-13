import { Story, Meta } from '@storybook/react/types-6-0'

import { ButtonProps, Button } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy Now',
  fullWidth: false
}
