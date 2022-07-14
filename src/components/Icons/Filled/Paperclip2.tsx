
import Paperclip2 from "../../../assets/filled/Paperclip2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Paperclip2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Paperclip2} data-testid="Paperclip2Icon" className={classes} />
  );
}
