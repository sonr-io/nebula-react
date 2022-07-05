
import LinkCircle from "../../../assets/duotone/LinkCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LinkCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LinkCircle data-testid="LinkCircleIcon" className={classes} />
  );
}
