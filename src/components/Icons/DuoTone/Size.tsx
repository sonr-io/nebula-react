
import Size from "../../../assets/duotone/Size.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SizeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Size data-testid="SizeIcon" className={classes} />
  );
}
