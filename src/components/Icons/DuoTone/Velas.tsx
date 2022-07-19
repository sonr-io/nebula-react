
import Velas from "../../../assets/duotone/Velas.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VelasIcon({ className, dataTestid = "VelasIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Velas data-testid={dataTestid} className={classes} {...rest} />
  );
}
