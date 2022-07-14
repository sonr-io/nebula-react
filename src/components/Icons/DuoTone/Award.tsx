
import Award from "../../../assets/duotone/Award.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AwardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Award} data-testid="AwardIcon" className={classes} />
  );
}
