
import ArrowBottom from "../../../assets/duotone/ArrowBottom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowBottomIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowBottom} data-testid="ArrowBottomIcon" className={classes} />
  );
}
