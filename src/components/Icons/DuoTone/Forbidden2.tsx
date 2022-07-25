
import Forbidden2 from "../../../assets/duotone/Forbidden2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Forbidden2Icon({ className, dataTestid = "Forbidden2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Forbidden2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
