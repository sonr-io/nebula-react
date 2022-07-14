
import Money2 from "../../../assets/outline/Money2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Money2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Money2 data-testid="Money2Icon" className={classes} />
  );
}
