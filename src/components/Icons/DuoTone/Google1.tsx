
import Google1 from "../../../assets/duotone/Google1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Google1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Google1 data-testid="Google1Icon" className={classes} />
  );
}
