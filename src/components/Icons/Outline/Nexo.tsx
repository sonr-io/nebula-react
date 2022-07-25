
import Nexo from "../../../assets/outline/Nexo.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NexoIcon({ className, dataTestid = "NexoIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Nexo data-testid={dataTestid} className={classes} {...rest} />
  );
}
