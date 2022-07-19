
import Hospital from "../../../assets/outline/Hospital.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HospitalIcon({ className, dataTestid = "HospitalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Hospital data-testid={dataTestid} className={classes} {...rest} />
  );
}
