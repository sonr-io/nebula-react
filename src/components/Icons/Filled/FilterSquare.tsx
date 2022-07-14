
import FilterSquare from "../../../assets/filled/FilterSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FilterSquare} data-testid="FilterSquareIcon" className={classes} />
  );
}
