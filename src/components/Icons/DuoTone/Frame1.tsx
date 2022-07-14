
import Frame1 from "../../../assets/duotone/Frame1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Frame1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Frame1} data-testid="Frame1Icon" className={classes} />
  );
}
