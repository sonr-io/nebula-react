
import Dent from "../../../assets/outline/Dent.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DentIcon({ className, dataTestid = "DentIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Dent data-testid={dataTestid} className={classes} {...rest} />
  );
}
