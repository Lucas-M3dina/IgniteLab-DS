import { Button, ButtonProps } from "./Button.jsx";
import { Meta, StoryObj } from "@storybook/react";

export default{
  title: 'components/Button',
  component: Button,
  args: {
    children: 'Lorem Ipsum',
  },
  argTypes: {}

  } as Meta<ButtonProps>

export const Default : StoryObj<ButtonProps> = {}