
import ReceiptEdit from "../../../assets/duotone/ReceiptEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ReceiptEdit} data-testid="ReceiptEditIcon" className={classes} />
  );
}
