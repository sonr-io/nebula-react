
import ReceiptEdit from "../../../assets/filled/ReceiptEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ReceiptEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ReceiptEdit data-testid="ReceiptEditIcon" className={classes} />
  );
}
