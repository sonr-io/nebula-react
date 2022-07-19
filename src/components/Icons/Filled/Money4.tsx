
import Money4 from "../../../assets/filled/Money4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Money4Icon({ className, dataTestid = "Money4Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Money4 data-testid={dataTestid} className={classes} {...rest} />
  );
}
