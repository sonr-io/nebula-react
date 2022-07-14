
import WifiSquare from "../../../assets/outline/WifiSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WifiSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={WifiSquare} data-testid="WifiSquareIcon" className={classes} />
  );
}
