
import GlobalEdit from "../../../assets/duotone/GlobalEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GlobalEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GlobalEdit data-testid="GlobalEditIcon" className={classes} />
  );
}
