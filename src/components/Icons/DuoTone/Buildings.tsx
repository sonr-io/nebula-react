
import Buildings from "../../../assets/duotone/Buildings.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BuildingsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Buildings} data-testid="BuildingsIcon" className={classes} />
  );
}
