
import GooglePaly from "../../../assets/outline/GooglePaly.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GooglePalyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={GooglePaly} data-testid="GooglePalyIcon" className={classes} />
  );
}
