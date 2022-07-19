
import Dash from "../../../assets/filled/Dash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DashIcon({ className, dataTestid = "DashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Dash data-testid={dataTestid} className={classes} {...rest} />
  );
}
