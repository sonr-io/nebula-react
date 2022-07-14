
import Category2 from "../../../assets/duotone/Category2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Category2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Category2} data-testid="Category2Icon" className={classes} />
  );
}
