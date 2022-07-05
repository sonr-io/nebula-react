
import Scanner from "../../../assets/filled/Scanner.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ScannerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Scanner data-testid="ScannerIcon" className={classes} />
  );
}
