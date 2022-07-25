
import Stickynote from "../../../assets/duotone/Stickynote.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StickynoteIcon({ className, dataTestid = "StickynoteIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Stickynote data-testid={dataTestid} className={classes} {...rest} />
  );
}
