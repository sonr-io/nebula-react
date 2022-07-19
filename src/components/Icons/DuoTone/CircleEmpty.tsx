
import CircleEmpty from "../../../assets/duotone/CircleEmpty.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CircleEmptyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CircleEmpty data-testid="CircleEmptyIcon" className={classes} />
  );
}
