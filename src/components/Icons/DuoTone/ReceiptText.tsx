
import ReceiptText from "../../../assets/duotone/ReceiptText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptTextIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ReceiptText} data-testid="ReceiptTextIcon" className={classes} />
  );
}
