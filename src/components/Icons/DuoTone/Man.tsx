
import Man from "../../../assets/duotone/Man.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ManIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Man} data-testid="ManIcon" className={classes} />
  );
}
