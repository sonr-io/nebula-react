
import GooglePaly from "../../../assets/outline/GooglePaly.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GooglePalyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GooglePaly data-testid="GooglePalyIcon" className={classes} />
  );
}
