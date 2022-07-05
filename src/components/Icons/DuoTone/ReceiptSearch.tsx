
import ReceiptSearch from "../../../assets/duotone/ReceiptSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ReceiptSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ReceiptSearch data-testid="ReceiptSearchIcon" className={classes} />
  );
}
