
import FilterAdd from "../../../assets/duotone/FilterAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FilterAdd} data-testid="FilterAddIcon" className={classes} />
  );
}
