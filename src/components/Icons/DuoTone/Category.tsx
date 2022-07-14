
import Category from "../../../assets/duotone/Category.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CategoryIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Category data-testid="CategoryIcon" className={classes} />
  );
}
