
import MessageText1 from "../../../assets/filled/MessageText1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageText1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MessageText1} data-testid="MessageText1Icon" className={classes} />
  );
}
