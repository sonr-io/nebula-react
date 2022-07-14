
import Hex from "../../../assets/filled/Hex.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HexIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Hex} data-testid="HexIcon" className={classes} />
  );
}
