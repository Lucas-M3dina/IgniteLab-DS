import { TextInput, TextInputProps, TextInputRootProps } from "./TextInput.jsx";
import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";

export default{
  title: 'components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      [
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>,
        <TextInput.Input placeholder='Type your email'/>
      ]
    )
  },
  argTypes: {}

  } as Meta<TextInputRootProps>

export const Default : StoryObj<TextInputProps> = {}

export const withoutIcon : StoryObj<TextInputProps> = {
  args: {
    children: (
      [
        <TextInput.Input placeholder='Type your email'/>
      ]
    )
  }
}