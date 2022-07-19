
import Element1 from "../../../assets/outline/Element1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Element1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Element1 data-testid="Element1Icon" className={classes} />
  );
}