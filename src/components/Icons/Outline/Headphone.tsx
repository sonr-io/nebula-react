
import Headphone from "../../../assets/outline/Headphone.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeadphoneIcon({ className, dataTestid = "HeadphoneIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Headphone data-testid={dataTestid} className={classes} {...rest} />
  );
}
