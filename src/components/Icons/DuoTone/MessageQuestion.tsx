
import MessageQuestion from "../../../assets/duotone/MessageQuestion.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageQuestionIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MessageQuestion} data-testid="MessageQuestionIcon" className={classes} />
  );
}
