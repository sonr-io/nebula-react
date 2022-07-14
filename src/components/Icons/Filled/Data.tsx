
import Data from "../../../assets/filled/Data.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DataIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Data} data-testid="DataIcon" className={classes} />
  );
}
