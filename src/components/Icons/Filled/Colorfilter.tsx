
import Colorfilter from "../../../assets/filled/Colorfilter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ColorfilterIcon({ className, dataTestid = "ColorfilterIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Colorfilter data-testid={dataTestid} className={classes} {...rest} />
  );
}
