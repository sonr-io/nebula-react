
import Chrome from "../../../assets/outline/Chrome.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ChromeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Chrome data-testid="ChromeIcon" className={classes} />
  );
}
