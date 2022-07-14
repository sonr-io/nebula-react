
import Celo from "../../../assets/outline/Celo.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CeloIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Celo} data-testid="CeloIcon" className={classes} />
  );
}
