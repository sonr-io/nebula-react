
import FilterRemove from "../../../assets/duotone/FilterRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FilterRemove} data-testid="FilterRemoveIcon" className={classes} />
  );
}
