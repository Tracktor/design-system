import { Paper, PaperProps, Slide } from "@mui/material";
import { forwardRef, Ref } from "react";

export interface BottomFixedPaperProps extends PaperProps {
  /**
   * If true, the component will transition in.
   */
  in?: boolean;
  /**
   * The position of the paper.
   * @default "fixed"
   */
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  /**
   * The padding of the paper.
   * @default y = 3, x = 2
   */
  padding?: number | string;
  /**
   * The direction of the paper.
   */
  direction?: "row" | "column";
  /**
   * By default the child component is not mounted immediately along with the
   * parent Transition component. If you want to "lazy mount" the component on
   * the first `in={true}` you can set `mountOnEnter`. After the first enter
   * transition the component will stay mounted, even on "exited", unless you
   * also specify `unmountOnExit`.
   */
  mountOnEnter?: boolean | undefined;
  /**
   * By default the child component is unmounted after it reaches the
   * 'exited' state. Set `unmountOnExit` if you'd prefer to unmount the
   * component after it finishes exiting.
   */
  unmountOnExit?: boolean | undefined;
}

const BottomFixedPaper = (
  {
    in: transition,
    children,
    sx,
    padding,
    direction,
    position = "fixed",
    mountOnEnter = true,
    unmountOnExit = true,
    ...props
  }: BottomFixedPaperProps,
  ref: Ref<HTMLDivElement>,
) => (
  <Slide mountOnEnter={mountOnEnter} unmountOnExit={unmountOnExit} in={transition === undefined ? true : transition} direction="up">
    <Paper
      square
      elevation={0}
      ref={ref}
      sx={{
        borderTop: ({ palette }) => `1px solid ${palette.divider}`,
        bottom: 0,
        left: 0,
        padding,
        paddingX: padding ? undefined : 2,
        paddingY: padding ? undefined : 3,
        position,
        right: 0,
        zIndex: 10,
        ...(direction === "column" && {
          display: "flex",
          flexDirection: "column",
        }),
        ...(direction === "row" && {
          display: "flex",
          flexDirection: "row",
        }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Paper>
  </Slide>
);

export default forwardRef(BottomFixedPaper);
