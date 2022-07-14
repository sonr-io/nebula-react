
import Send2 from "../../../assets/filled/Send2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Send2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Send2} data-testid="Send2Icon" className={classes} />
  );
}
