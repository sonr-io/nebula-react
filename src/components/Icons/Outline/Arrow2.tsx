
import Arrow2 from "../../../assets/outline/Arrow2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Arrow2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Arrow2} data-testid="Arrow2Icon" className={classes} />
  );
}
