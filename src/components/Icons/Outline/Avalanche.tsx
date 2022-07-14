
import Avalanche from "../../../assets/outline/Avalanche.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AvalancheIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Avalanche} data-testid="AvalancheIcon" className={classes} />
  );
}
