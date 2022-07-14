
import Receipt21 from "../../../assets/duotone/Receipt21.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Receipt21Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Receipt21 data-testid="Receipt21Icon" className={classes} />
  );
}
