
import Element3 from "../../../assets/filled/Element3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Element3Icon({ className, dataTestid = "Element3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Element3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
