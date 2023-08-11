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
      className={`
                w-[100%] h-[170px]
                object-cover
                ${className ?? ''}
                `}
    />
  )
}
