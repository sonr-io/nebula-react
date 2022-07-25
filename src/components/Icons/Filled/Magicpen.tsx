
import Magicpen from "../../../assets/filled/Magicpen.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MagicpenIcon({ className, dataTestid = "MagicpenIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Magicpen data-testid={dataTestid} className={classes} {...rest} />
  );
}
