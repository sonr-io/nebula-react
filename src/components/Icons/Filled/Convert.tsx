
import Convert from "../../../assets/filled/Convert.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ConvertIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Convert data-testid="ConvertIcon" className={classes} />
  );
}
