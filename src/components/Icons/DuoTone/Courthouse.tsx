
import Courthouse from "../../../assets/duotone/Courthouse.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CourthouseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Courthouse} data-testid="CourthouseIcon" className={classes} />
  );
}
