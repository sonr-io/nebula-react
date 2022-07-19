
import Theta from "../../../assets/duotone/Theta.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ThetaIcon({ className, dataTestid = "ThetaIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Theta data-testid={dataTestid} className={classes} {...rest} />
  );
}
