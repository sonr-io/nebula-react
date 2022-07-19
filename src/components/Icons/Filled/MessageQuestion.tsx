
import MessageQuestion from "../../../assets/filled/MessageQuestion.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageQuestionIcon({ className, dataTestid = "MessageQuestionIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageQuestion data-testid={dataTestid} className={classes} {...rest} />
  );
}
