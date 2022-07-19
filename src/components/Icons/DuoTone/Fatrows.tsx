
import Fatrows from "../../../assets/duotone/Fatrows.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FatrowsIcon({ className, dataTestid = "FatrowsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Fatrows data-testid={dataTestid} className={classes} {...rest} />
  );
}
