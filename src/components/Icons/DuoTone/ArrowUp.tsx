
import ArrowUp from "../../../assets/duotone/ArrowUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowUp data-testid="ArrowUpIcon" className={classes} />
  );
}
