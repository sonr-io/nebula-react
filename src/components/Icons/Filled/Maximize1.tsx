
import Maximize1 from "../../../assets/filled/Maximize1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Maximize1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Maximize1 data-testid="Maximize1Icon" className={classes} />
  );
}
