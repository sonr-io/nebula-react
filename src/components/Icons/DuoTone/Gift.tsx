
import Gift from "../../../assets/duotone/Gift.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GiftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Gift data-testid="GiftIcon" className={classes} />
  );
}
