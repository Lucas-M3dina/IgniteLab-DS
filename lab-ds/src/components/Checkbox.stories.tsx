import { Checkbox, CheckboxProps } from "./Checkbox.jsx";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text.jsx";

export default{
  title: 'components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return(
        <div className="flex items-center gap-3">
          {Story()}
          <Text size="sm">Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    }
  ]

  } as Meta<CheckboxProps>

export const Default : StoryObj<CheckboxProps> = {}