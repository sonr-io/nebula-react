
import TransactionMinus from "../../../assets/filled/TransactionMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TransactionMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TransactionMinus data-testid="TransactionMinusIcon" className={classes} />
  );
}
