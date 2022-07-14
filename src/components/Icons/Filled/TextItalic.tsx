
import TextItalic from "../../../assets/filled/TextItalic.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextItalicIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TextItalic data-testid="TextItalicIcon" className={classes} />
  );
}
