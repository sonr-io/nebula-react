
import PenTool from "../../../assets/duotone/PenTool.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PenToolIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PenTool} data-testid="PenToolIcon" className={classes} />
  );
}
