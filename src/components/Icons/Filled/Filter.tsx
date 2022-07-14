
import Filter from "../../../assets/filled/Filter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Filter} data-testid="FilterIcon" className={classes} />
  );
}
