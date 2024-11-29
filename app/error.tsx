'use client';
import { MessageContainer } from '@/shared/components/MessageContainer';
import { ErrorIcon } from '@/shared/icons';

export default function GlobalError({ error}: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <MessageContainer
      iconComponent={<ErrorIcon />}
      title="Oops! Something Went Wrong"
      text={error.message}
      buttonText="Back to Home"
      link="/"
    />
  );
}
