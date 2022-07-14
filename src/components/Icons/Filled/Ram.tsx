
import Ram from "../../../assets/filled/Ram.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RamIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ram data-testid="RamIcon" className={classes} />
  );
}
