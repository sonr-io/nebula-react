
import Apple from "../../../assets/duotone/Apple.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AppleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Apple data-testid="AppleIcon" className={classes} />
  );
}
