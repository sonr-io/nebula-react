
import ReceiptItem from "../../../assets/filled/ReceiptItem.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptItemIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ReceiptItem} data-testid="ReceiptItemIcon" className={classes} />
  );
}
