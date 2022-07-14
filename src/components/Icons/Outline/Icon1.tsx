
import Icon1 from "../../../assets/outline/Icon1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Icon1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Icon1} data-testid="Icon1Icon" className={classes} />
  );
}
