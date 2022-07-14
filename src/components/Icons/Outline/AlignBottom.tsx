
import AlignBottom from "../../../assets/outline/AlignBottom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlignBottomIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AlignBottom data-testid="AlignBottomIcon" className={classes} />
  );
}
