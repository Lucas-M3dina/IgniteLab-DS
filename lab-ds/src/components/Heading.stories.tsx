import { HeadingProps, Heading } from "./Heading.jsx";
import { Meta, StoryObj } from "@storybook/react";

export default{
  title: 'components/Heading',
  component: Heading,
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
} as Meta<HeadingProps>

export const Medium : StoryObj<HeadingProps> = {}

export const Small : StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
  }
}

export const Large : StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  }
}

export const CustomTag : StoryObj<HeadingProps> = {
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