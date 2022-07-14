
import Tenx from "../../../assets/filled/Tenx.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TenxIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Tenx data-testid="TenxIcon" className={classes} />
  );
}
