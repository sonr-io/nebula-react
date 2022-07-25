
import Vuesax from "../../../assets/duotone/Vuesax.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VuesaxIcon({ className, dataTestid = "VuesaxIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Vuesax data-testid={dataTestid} className={classes} {...rest} />
  );
}
