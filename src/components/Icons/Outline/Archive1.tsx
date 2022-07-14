
import Archive1 from "../../../assets/outline/Archive1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Archive1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Archive1 data-testid="Archive1Icon" className={classes} />
  );
}
