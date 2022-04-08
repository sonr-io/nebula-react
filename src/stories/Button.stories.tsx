import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: { control: { type: 'text', defaultValue: 'Login' } },
    styling: { control: { type: 'text', defaultValue: 'bg-primaryLight-500 hover:bg-primaryLight-700 text-white font-bold py-2 px-4 rounded' }},
    onClick: { control: { action: 'onClick', actionOptions: { action: 'onClick' } } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Login = Template.bind({});
Login.args = {
  label: 'Login',
  styling: 'bg-primaryLight-500 hover:bg-primaryLight-700 text-white font-bold py-2 px-4 rounded',
  onClick: () => {
    alert('Clicked!');
  }
};