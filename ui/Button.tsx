import clsx from 'clsx';

export default function Button({
  kind = 'default',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: 'default' | 'error';
}) {
  return (
    <button
      className={clsx('rounded-lg px-5 py-2 text-sm font-medium', {
        'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white':
          kind === 'default',
        'bg-red-600 text-red-50 hover:bg-red-500 hover:text-white':
          kind === 'error',
      })}
      {...props}
    />
  );
}
