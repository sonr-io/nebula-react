
import Hex from "../../../assets/outline/Hex.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HexIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Hex data-testid="HexIcon" className={classes} />
  );
}
