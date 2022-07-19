
import Element4 from "../../../assets/filled/Element4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Element4Icon({ className, dataTestid = "Element4Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Element4 data-testid={dataTestid} className={classes} {...rest} />
  );
}
