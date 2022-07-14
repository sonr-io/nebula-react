
import Convert from "../../../assets/outline/Convert.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ConvertIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Convert data-testid="ConvertIcon" className={classes} />
  );
}
