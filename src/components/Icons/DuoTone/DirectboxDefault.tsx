
import DirectboxDefault from "../../../assets/duotone/DirectboxDefault.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectboxDefaultIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DirectboxDefault} data-testid="DirectboxDefaultIcon" className={classes} />
  );
}
