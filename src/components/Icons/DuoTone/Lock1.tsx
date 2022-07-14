
import Lock1 from "../../../assets/duotone/Lock1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Lock1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Lock1} data-testid="Lock1Icon" className={classes} />
  );
}
