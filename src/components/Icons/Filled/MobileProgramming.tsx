
import MobileProgramming from "../../../assets/filled/MobileProgramming.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MobileProgrammingIcon({ className, dataTestid = "MobileProgrammingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MobileProgramming data-testid={dataTestid} className={classes} {...rest} />
  );
}
