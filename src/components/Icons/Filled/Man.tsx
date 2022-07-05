
import Man from "../../../assets/filled/Man.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ManIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Man data-testid="ManIcon" className={classes} />
  );
}
