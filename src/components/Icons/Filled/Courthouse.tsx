
import Courthouse from "../../../assets/filled/Courthouse.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CourthouseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Courthouse data-testid="CourthouseIcon" className={classes} />
  );
}
