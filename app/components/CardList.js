import React from 'react';
import Card from './Card';
import Pagination from './Pagination';
import { fetchData } from '../utils/fetchData';

const CardList = async ({ pageId }) => {
    const data = await fetchData(`https://taxivoshod.ru/testapi/?w=list&page=${pageId}`);

    return (
        <>
            <div className="card-list">
                {data.items.map((card) => (
                    <div className="card-list__item" key={card.id}>
                        <Card id={card.id} name={card.name} currentPage={data.page} />
                    </div>
                ))}
            </div>
            <div className="card-list__pagination">
                <Pagination pagesSize={data.pages} />
            </div>
        </>
    );
};

export default CardList;
