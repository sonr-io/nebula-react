
import Scissor from "../../../assets/filled/Scissor.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ScissorIcon({ className, dataTestid = "ScissorIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Scissor data-testid={dataTestid} className={classes} {...rest} />
  );
}
