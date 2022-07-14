
import Diamonds from "../../../assets/duotone/Diamonds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DiamondsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Diamonds data-testid="DiamondsIcon" className={classes} />
  );
}
