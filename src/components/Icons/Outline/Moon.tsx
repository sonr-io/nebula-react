
import Moon from "../../../assets/outline/Moon.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoonIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Moon} data-testid="MoonIcon" className={classes} />
  );
}
