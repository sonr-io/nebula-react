
import Wanchain1 from "../../../assets/duotone/Wanchain1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Wanchain1Icon({ className, dataTestid = "Wanchain1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Wanchain1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
