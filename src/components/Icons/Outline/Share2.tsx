
import Share2 from "../../../assets/outline/Share2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Share2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Share2 data-testid="Share2Icon" className={classes} />
  );
}
