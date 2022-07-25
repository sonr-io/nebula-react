
import Xiaomi from "../../../assets/filled/Xiaomi.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function XiaomiIcon({ className, dataTestid = "XiaomiIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Xiaomi data-testid={dataTestid} className={classes} {...rest} />
  );
}
