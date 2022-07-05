
import Hex from "../../../assets/filled/Hex.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HexIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Hex data-testid="HexIcon" className={classes} />
  );
}
