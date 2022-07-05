
import BoxSearch from "../../../assets/filled/BoxSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BoxSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BoxSearch data-testid="BoxSearchIcon" className={classes} />
  );
}
