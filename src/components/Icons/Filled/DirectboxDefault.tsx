
import DirectboxDefault from "../../../assets/filled/DirectboxDefault.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DirectboxDefaultIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DirectboxDefault data-testid="DirectboxDefaultIcon" className={classes} />
  );
}
