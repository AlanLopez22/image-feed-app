import Image from 'next/image'
import { IImageItem } from './image-item.model'

export default function ImageItem(data: IImageItem) {
    return (
        <div className="flex flex-col items-center">
            <Image
                src={data.source}
                alt={data.name}
                width={300}
                height={50}
                priority
                className='h-auto max-w-full rounded-lg'
            />
            <h1>{data.name}</h1>
        </div>
    )
}