import { Text, TextProps } from "./Text.jsx";
import { Meta, StoryObj } from "@storybook/react";

export default{
  title: 'components/Text',
  component: Text,
  args: {
    children: 'Lorem Ipsum',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Medium : StoryObj<TextProps> = {}

export const Small : StoryObj<TextProps> = {
  args: {
    size: 'sm',
  }
}

export const Large : StoryObj<TextProps> = {
  args: {
    size: 'lg',
  }
}

export const CustomTag : StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <h1>componente com h1</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}