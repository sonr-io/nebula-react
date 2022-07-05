
import AlignHorizontally from "../../../assets/outline/AlignHorizontally.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AlignHorizontallyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AlignHorizontally data-testid="AlignHorizontallyIcon" className={classes} />
  );
}
