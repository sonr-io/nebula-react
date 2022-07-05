
import Facebook from "../../../assets/duotone/Facebook.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FacebookIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Facebook data-testid="FacebookIcon" className={classes} />
  );
}
