
import ReceiptText from "../../../assets/filled/ReceiptText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptTextIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ReceiptText data-testid="ReceiptTextIcon" className={classes} />
  );
}
