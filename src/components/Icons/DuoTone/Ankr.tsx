
import Ankr from "../../../assets/duotone/Ankr.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AnkrIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ankr data-testid="AnkrIcon" className={classes} />
  );
}
