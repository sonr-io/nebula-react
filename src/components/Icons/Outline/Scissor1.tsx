
import Scissor1 from "../../../assets/outline/Scissor1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Scissor1Icon({ className, dataTestid = "Scissor1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Scissor1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
