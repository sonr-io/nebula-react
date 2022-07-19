
import SquareEmpty from "../../../assets/filled/SquareEmpty.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SquareEmptyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SquareEmpty data-testid="SquareEmptyIcon" className={classes} />
  );
}
