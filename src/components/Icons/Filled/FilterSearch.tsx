
import FilterSearch from "../../../assets/filled/FilterSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FilterSearch} data-testid="FilterSearchIcon" className={classes} />
  );
}
