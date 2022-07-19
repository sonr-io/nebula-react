
import Close from "../../../assets/duotone/Close.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Close data-testid="CloseIcon" className={classes} />
  );
}
