'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Pagination = ({ pagesSize }) => {
    const { id } = useParams();
    const router = useRouter();
    const [pageNumber, setPageNumber] = useState(null);

    const decrementPageNumber = () => {
        if (Number(pageNumber) > 1) {
            setPageNumber(Number(pageNumber) - 1);
            router.push(`/list/${Number(pageNumber) - 1}`);
        }
    };

    const incrementPageNumber = () => {
        if (Number(pageNumber) < pagesSize) {
            setPageNumber(Number(pageNumber) + 1);
            router.push(`/list/${Number(pageNumber) + 1}`);
        }
    };

    useEffect(() => {
        setPageNumber(id);
    }, []);

    return (
        <ul className="pagination">
            <li onClick={decrementPageNumber}>
                <Link href={`/list/${pageNumber}`}>&lt;</Link>
            </li>
            {[...Object.keys([...Array(pagesSize)])]
                .map((i) => Number(i) + 1)
                .map((num) => (
                    <li key={num}>
                        <Link className={pageNumber == num ? 'active' : ''} href={`/list/${num}`}>
                            {num}
                        </Link>
                    </li>
                ))}
            <li onClick={incrementPageNumber}>
                <Link href={`/list/${pageNumber}`}>&gt;</Link>
            </li>
        </ul>
    );
};

export default Pagination;
