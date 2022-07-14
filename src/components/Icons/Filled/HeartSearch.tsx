
import HeartSearch from "../../../assets/filled/HeartSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={HeartSearch} data-testid="HeartSearchIcon" className={classes} />
  );
}
