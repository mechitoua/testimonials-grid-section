interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
  content: string;
  avatarUrl: string;
  className?: string;
}

export default function TestimonialCard({
  name,
  title,
  quote,
  content,
  avatarUrl,
  className = '',
}: TestimonialProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}>
      {name.includes('Daniel') ? (
        <img
          alt='bg-pattern-quotation'
          src='/bg-pattern-quotation.svg'
          className='absolute right-20 top-0 h-28 w-28 opacity-80 z-8'
        />
      ) : null}
      <div className='flex items-center gap-4'>
        <img
          src={avatarUrl}
          alt={name}
          className='h-8 w-8 rounded-full border-2 border-opacity-50 object-cover'
        />
        <div>
          <h3 className='font-semibold leading-tight text-inherit '>{name}</h3>
          <p className='text-[13px] text-inherit opacity-50'>{title}</p>
        </div>
      </div>
      <p className='mt-4 text-xl font-semibold leading-tight text-inherit max-w[50px]'>
        {quote}
      </p>
      <p className='mt-4 text-[13px] leading-relaxed text-inherit opacity-70'>
        "{content}"
      </p>
    </div>
  );
}
