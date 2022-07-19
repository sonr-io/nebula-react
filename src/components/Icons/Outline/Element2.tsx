
import Element2 from "../../../assets/outline/Element2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Element2Icon({ className, dataTestid = "Element2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Element2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
