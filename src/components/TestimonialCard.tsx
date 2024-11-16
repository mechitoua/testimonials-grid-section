import { TestimonialProps } from '@/types';

export default function TestimonialCard({
  name,
  quote,
  content,
  avatarUrl,
  className = '',
}: TestimonialProps) {
  return (
    <div
      className={`relative h-full p-[32px] rounded-[8px] shadow-[0_10px_20px_rgba(0,0,0,0.1)] ${className}`}>
      {name.includes('Daniel') && (
        <img
          alt='bg-pattern-quotation'
          src='/bg-pattern-quotation.svg'
          className='absolute right-[80px] top-0 w-[104px] h-[102px] opacity-70 z-0'
        />
      )}
      <div className='relative z-10'>
        <div className='flex items-center gap-[16px] mb-[18px]'>
          <img
            src={avatarUrl}
            alt={name}
            className='h-[28px] w-[28px] rounded-full border-2 border-opacity-50'
          />
          <div>
            <h3 className='font-medium text-[13px] leading-[13px] text-inherit'>
              {name}
            </h3>
            <p className='text-[11px] leading-[11px] mt-1 text-inherit opacity-50'>
              Verified Graduate
            </p>
          </div>
        </div>
        <p className='text-[20px] font-semibold leading-[24px] text-inherit mb-[16px]'>
          {quote}
        </p>
        <p className='text-[13px] leading-[18px] text-inherit opacity-70'>
          " {content} "
        </p>
      </div>
    </div>
  );
}
