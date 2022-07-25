
import Category from "../../../assets/outline/Category.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CategoryIcon({ className, dataTestid = "CategoryIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Category data-testid={dataTestid} className={classes} {...rest} />
  );
}
