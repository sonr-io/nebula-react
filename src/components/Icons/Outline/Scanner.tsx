
import Scanner from "../../../assets/outline/Scanner.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ScannerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Scanner} data-testid="ScannerIcon" className={classes} />
  );
}
