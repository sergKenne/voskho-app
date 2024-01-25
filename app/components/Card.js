import React from 'react';
import Link from 'next/link';

const Card = ({ id, name, currentPage }) => {
    return (
        <>
            <div className="card">
                <div className="card__body">
                    <div className="card__number">{id}</div>
                    <h2 className="card__title">{name}</h2>
                    <Link href={`/list/${currentPage}?item=${id}`} className="card__btn">
                        View
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Card;
