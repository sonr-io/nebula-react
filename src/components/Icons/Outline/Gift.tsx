
import Gift from "../../../assets/outline/Gift.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GiftIcon({ className, dataTestid = "GiftIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Gift data-testid={dataTestid} className={classes} {...rest} />
  );
}
