
import Mask from "../../../assets/outline/Mask.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MaskIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Mask data-testid="MaskIcon" className={classes} />
  );
}
