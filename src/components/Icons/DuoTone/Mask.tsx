
import Mask from "../../../assets/duotone/Mask.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MaskIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Mask data-testid="MaskIcon" className={classes} />
  );
}
