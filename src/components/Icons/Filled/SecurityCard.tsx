
import SecurityCard from "../../../assets/filled/SecurityCard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SecurityCardIcon({ className, dataTestid = "SecurityCardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SecurityCard data-testid={dataTestid} className={classes} {...rest} />
  );
}
