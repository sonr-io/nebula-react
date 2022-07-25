
import Close from "../../../assets/filled/Close.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloseIcon({ className, dataTestid = "CloseIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Close data-testid={dataTestid} className={classes} {...rest} />
  );
}
