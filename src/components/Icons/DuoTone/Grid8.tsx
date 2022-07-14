
import Grid8 from "../../../assets/duotone/Grid8.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid8Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Grid8} data-testid="Grid8Icon" className={classes} />
  );
}
