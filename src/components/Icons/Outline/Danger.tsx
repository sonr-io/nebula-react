
import Danger from "../../../assets/outline/Danger.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DangerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Danger data-testid="DangerIcon" className={classes} />
  );
}