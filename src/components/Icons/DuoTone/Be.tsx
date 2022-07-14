
import Be from "../../../assets/duotone/Be.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Be} data-testid="BeIcon" className={classes} />
  );
}
