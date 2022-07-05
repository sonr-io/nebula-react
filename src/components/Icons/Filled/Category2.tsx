
import Category2 from "../../../assets/filled/Category2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Category2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Category2 data-testid="Category2Icon" className={classes} />
  );
}
