import { Button } from "./Button.js";
 
export default {
  title: "Button",
  component: Button,
  args: {
    label: "Demo Button"
  }
};
 
const Template = args => <Button {...args} />;
 
export const Standard = Template.bind({});
 
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true, 
  label: "Disabled Button"
};
