
import Dai from "../../../assets/filled/Dai.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DaiIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Dai} data-testid="DaiIcon" className={classes} />
  );
}
