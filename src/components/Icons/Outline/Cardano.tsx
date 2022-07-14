
import Cardano from "../../../assets/outline/Cardano.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardanoIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Cardano} data-testid="CardanoIcon" className={classes} />
  );
}
