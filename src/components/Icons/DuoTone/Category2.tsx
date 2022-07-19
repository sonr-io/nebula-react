
import Category2 from "../../../assets/duotone/Category2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Category2Icon({ className, dataTestid = "Category2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Category2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
