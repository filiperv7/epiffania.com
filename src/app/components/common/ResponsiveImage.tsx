import Image from 'next/image'

interface ResponsiveImageProps {
  src: any
  className?: string
  alt: string
}

export default function ResponsiveImage({
  src,
  className,
  alt
}: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={10000}
      height={10000}
      className={`
                w-full h-[170px]
                object-cover
                ${className ?? ''}
                `}
    />
  )
}
