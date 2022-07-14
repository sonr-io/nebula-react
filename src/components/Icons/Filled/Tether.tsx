
import Tether from "../../../assets/filled/Tether.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TetherIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Tether} data-testid="TetherIcon" className={classes} />
  );
}
