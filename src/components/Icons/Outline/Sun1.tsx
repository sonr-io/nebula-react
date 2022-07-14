
import Sun1 from "../../../assets/outline/Sun1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Sun1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Sun1 data-testid="Sun1Icon" className={classes} />
  );
}
