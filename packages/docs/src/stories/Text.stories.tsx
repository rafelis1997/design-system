import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typographic/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, possimus commodi expedita odio placeat ducimus sed vel beatae non. Beatae dolore perspiciatis asperiores nisi doloremque quaerat. Fuga deserunt nobis eum!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
