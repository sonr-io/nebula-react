
import Windows from "../../../assets/duotone/Windows.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WindowsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Windows} data-testid="WindowsIcon" className={classes} />
  );
}
