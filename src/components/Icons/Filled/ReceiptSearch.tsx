
import ReceiptSearch from "../../../assets/filled/ReceiptSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ReceiptSearch} data-testid="ReceiptSearchIcon" className={classes} />
  );
}
