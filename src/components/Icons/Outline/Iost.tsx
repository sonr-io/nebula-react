
import Iost from "../../../assets/outline/Iost.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function IostIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Iost} data-testid="IostIcon" className={classes} />
  );
}
