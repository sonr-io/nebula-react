
import Bootsrap from "../../../assets/filled/Bootsrap.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BootsrapIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Bootsrap} data-testid="BootsrapIcon" className={classes} />
  );
}
