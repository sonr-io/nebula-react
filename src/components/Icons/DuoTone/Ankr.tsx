
import Ankr from "../../../assets/duotone/Ankr.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AnkrIcon({ className, dataTestid = "AnkrIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Ankr data-testid={dataTestid} className={classes} {...rest} />
  );
}
