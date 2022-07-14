
import FtxToken from "../../../assets/duotone/FtxToken.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FtxTokenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FtxToken} data-testid="FtxTokenIcon" className={classes} />
  );
}
