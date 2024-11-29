import Link from 'next/link';

import { Button } from '../Button';
import { Typography } from '../TextComponent';

interface MessageContainerProps {
  title: string;
  text: string;
  buttonText: string;
  iconComponent: React.ReactNode;
  link: string;
}

const MessageContainer = ({ title, buttonText, text, iconComponent, link }: MessageContainerProps) => {
  return (
    <div className="h-[768px] flex items-center justify-center">
      <div className="max-w-[480px] m-auto flex flex-col items-center  gap-[24px]">
        {iconComponent}
        <Typography
          variant="Display1"
          component="h2"
          fontFamily="raleway"
          weight="medium"
          className="text-secondary-11 text-center"
        >
          {title}
        </Typography>
        <Typography
          variant="BodySM"
          component="p"
          fontFamily="roboto-slab"
          weight="regular"
          className="text-secondary-10 text-center"
        >
          {text}
        </Typography>
        <Button className="w-full" size="regular" type="primary_filled">
          <Link href={link}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};
export default MessageContainer;
