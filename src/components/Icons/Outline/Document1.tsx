
import Document1 from "../../../assets/outline/Document1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Document1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Document1 data-testid="Document1Icon" className={classes} />
  );
}
