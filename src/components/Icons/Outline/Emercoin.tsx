
import Emercoin from "../../../assets/outline/Emercoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmercoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Emercoin} data-testid="EmercoinIcon" className={classes} />
  );
}
