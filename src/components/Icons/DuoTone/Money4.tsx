
import Money4 from "../../../assets/duotone/Money4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Money4Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Money4 data-testid="Money4Icon" className={classes} />
  );
}
