
import Siacoin from "../../../assets/outline/Siacoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SiacoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Siacoin} data-testid="SiacoinIcon" className={classes} />
  );
}
