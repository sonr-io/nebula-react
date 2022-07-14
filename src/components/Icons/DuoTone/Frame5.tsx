
import Frame5 from "../../../assets/duotone/Frame5.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Frame5Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Frame5 data-testid="Frame5Icon" className={classes} />
  );
}
