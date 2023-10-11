'use client';
import { IImageItem } from './image-item.model';
import { IPageInfo } from '../components/page-info.model';
import ImageItem from './image-item';
import Paginator from '../components/paginator';
import { useEffect, useState } from 'react';

export default function Images() {
    const [images, setImages] = useState<IImageItem[]>([]);
    const [pageInfo, setPageInfo] = useState<IPageInfo>();
    
    async function getImages(pageNumber: number) {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`);
        const response = await res.json();
        const pageInfo = response.info as IPageInfo;
        pageInfo.current = pageNumber;
    
        const images = response.results.map((item: any) => {
            return {
                id: item.id,
                name: item.name,
                source: item.image
            }
        });
        
        setPageInfo(pageInfo);
        setImages(images);
    }

    useEffect(() => {
        getImages(1);
    }, []);

    return (
        <div className='flex flex-col gap-4 items-center'>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images != undefined && images.length > 0 ? images.map((image: IImageItem) => <ImageItem key={image.id} {...image}/>): null}

            </div>
            {pageInfo != undefined ? <Paginator pageInfo={pageInfo} pageChanged={getImages} /> : null}
        </div>
    )
}