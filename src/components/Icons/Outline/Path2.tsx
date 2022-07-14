
import Path2 from "../../../assets/outline/Path2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Path2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Path2} data-testid="Path2Icon" className={classes} />
  );
}
