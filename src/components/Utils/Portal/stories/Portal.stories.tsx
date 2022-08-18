import { Box, Button } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRef, useState } from "react";
import Portal from "./Portal";

const Template: ComponentStory<typeof Portal> = (args) => {
  const [show, setShow] = useState(false);
  const container = useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Box alignItems="center" justifyContent="center" height="100%">
      <Button variant="outlined" onClick={handleClick}>
        {show ? "Unmount children" : "Mount children"}
      </Button>
      <Box sx={{ border: "1px solid", my: 1, p: 1 }}>
        It looks like I will render here.
        {show ? (
          <Portal container={container.current} {...args}>
            <span>But I actually render here!</span>
          </Portal>
        ) : null}
      </Box>
      <Box sx={{ border: "1px solid", my: 1, p: 1 }} ref={container} />
    </Box>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: Portal,
  title: "Components/Utils/Portal",
} as ComponentMeta<typeof Portal>;
