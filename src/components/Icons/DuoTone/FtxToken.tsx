
import FtxToken from "../../../assets/duotone/FtxToken.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FtxTokenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FtxToken data-testid="FtxTokenIcon" className={classes} />
  );
}
