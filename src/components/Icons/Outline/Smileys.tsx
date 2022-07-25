
import Smileys from "../../../assets/outline/Smileys.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmileysIcon({ className, dataTestid = "SmileysIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Smileys data-testid={dataTestid} className={classes} {...rest} />
  );
}
