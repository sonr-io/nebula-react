
import Okb from "../../../assets/filled/Okb.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function OkbIcon({ className, dataTestid = "OkbIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Okb data-testid={dataTestid} className={classes} {...rest} />
  );
}
