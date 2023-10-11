'use client'
import { IPageInfo } from "./page-info.model";

type Props = {
    pageInfo: IPageInfo,
    pageChanged: any
}
export default function Paginator({pageInfo, pageChanged}: Props) {
    const total_pages = pageInfo.pages;
    const current_page = pageInfo.current;
    const pages = [];

    for (var i = current_page - 5; i <= current_page + 5 ; i++) {
        if (i > 0 && i <= total_pages) {
            pages.push(i);
        }
    }

    const currentPageClasses = 'flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
    const defaultPageClasses = 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
    return (
        <nav aria-label="Page navigation">
            <ul className="flex items-center -space-x-px h-10 text-base">
                <li>
                    <button
                        type="button"
                        className={defaultPageClasses}
                        onClick={() => pageChanged(pageInfo.current - 1)}
                        disabled={pageInfo.current <= 1}>
                        <span className="sr-only">Previous</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                    </button>
                </li>
                {pages.map((pageNumber, index) => {
                    return (
                        <li key={index}>
                            <button type="button" onClick={() => pageChanged(pageNumber)} className={pageInfo.current === pageNumber ? currentPageClasses : defaultPageClasses}>
                                {pageNumber}
                            </button>
                        </li>
                    )
                })}
                
                <li>
                    <button
                        type="button"
                        className={defaultPageClasses}
                        onClick={() => pageChanged(pageInfo.current + 1)}
                        disabled={pageInfo.current >= pageInfo.pages}>
                        <span className="sr-only">Next</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>

    )
}