
import Direct from "../../../assets/duotone/Direct.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Direct} data-testid="DirectIcon" className={classes} />
  );
}
