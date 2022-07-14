
import Cup from "../../../assets/duotone/Cup.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CupIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Cup data-testid="CupIcon" className={classes} />
  );
}
