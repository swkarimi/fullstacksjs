import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function SecondaryButton({ onClick, children, className }: Props) {
  return (
    <button
      type="button"
      className={clsx(
        `flex h-[53px] items-center gap-6 rounded-xl bg-bg-muted px-4 text-xsm font-semibold capitalize leading-tight text-fg-0 hover:cursor-pointer focus:outline`,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;