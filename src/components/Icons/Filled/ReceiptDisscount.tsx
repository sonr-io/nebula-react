
import ReceiptDisscount from "../../../assets/filled/ReceiptDisscount.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptDisscountIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ReceiptDisscount data-testid="ReceiptDisscountIcon" className={classes} />
  );
}
