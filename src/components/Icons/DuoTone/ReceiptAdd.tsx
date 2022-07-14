
import ReceiptAdd from "../../../assets/duotone/ReceiptAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ReceiptAdd} data-testid="ReceiptAddIcon" className={classes} />
  );
}
