
import Data from "../../../assets/filled/Data.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DataIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Data data-testid="DataIcon" className={classes} />
  );
}
