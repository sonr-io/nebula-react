
import Flash from "../../../assets/filled/Flash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Flash data-testid="FlashIcon" className={classes} />
  );
}
