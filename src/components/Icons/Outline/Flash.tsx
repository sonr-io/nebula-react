
import Flash from "../../../assets/outline/Flash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Flash} data-testid="FlashIcon" className={classes} />
  );
}
