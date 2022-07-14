
import FilterEdit from "../../../assets/outline/FilterEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FilterEdit} data-testid="FilterEditIcon" className={classes} />
  );
}
