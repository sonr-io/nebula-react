import { AvatarColor, AvatarProps, AvatarSize } from "../../types/avatarProps";

const cx = require("classnames");
const defaultClasses = "border rounded-full border-white";

export const lineHeight: { [key in AvatarSize]: string } = {
  lg: 'leading-10 pt-1',
  md: 'leading-10',
  sm: 'leading-8',
}

export const avatarSizes: { [key in AvatarSize]: string } = {
  lg: 'h-12 w-12',
  md: 'h-10 w-10',
  sm: 'h-8 w-8',
}

const gradientColors: { [key in AvatarColor]: string } = {
  gray: 'from-gray-500 to-gray-700',
  purple: 'from-purple-500 to-purple-700',
  green: 'from-green-500 to-green-700',
  red: 'from-red-500 to-red-700',
  orange: 'from-orange-500 to-orange-700',
  teal: 'from-teal-500 to-teal-700',
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = "md", color = 'purple', nearby }) => {
  const containerClasses = cx(defaultClasses, avatarSizes[size], { 'shadow-avatar': nearby });
  const altClasses = cx("h-full w-full rounded-full text-center text-white align-middle bg-gradient-to-br", gradientColors[color], lineHeight[size]);

  return (
    <div data-testid="nebula-avatar" className={containerClasses}>
      {src ? (
        <img data-testid="nebula-avatar-img" className="object-cover rounded-full" src={src} alt={alt} />
      ) : (
        <div data-testid="nebula-avatar-alt" className={altClasses}>{alt}</div>
      )}
    </div>
  )
}
