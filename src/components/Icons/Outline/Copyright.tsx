
import Copyright from "../../../assets/outline/Copyright.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CopyrightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Copyright} data-testid="CopyrightIcon" className={classes} />
  );
}
