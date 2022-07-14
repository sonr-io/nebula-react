
import Nebulas from "../../../assets/outline/Nebulas.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NebulasIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Nebulas} data-testid="NebulasIcon" className={classes} />
  );
}
