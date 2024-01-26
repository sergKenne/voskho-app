import React from 'react';
import Card from './Card';
import Pagination from './Pagination';
import Modal from './Modal';
import { fetchData } from '../utils/fetchData';

const CardList = async ({ searchParamsItem, pageId }) => {

    const urlItem = `https://taxivoshod.ru/testapi/?w=item&id=${searchParamsItem}`;
    const urlData = `https://taxivoshod.ru/testapi/?w=list&page=${pageId}`;

    const data = await fetchData(urlData);
    const item = searchParamsItem ? await fetchData(urlItem) : null;

    return (
        <>
            <div className="card-list">
                {data.items.map((card) => (
                    <div className="card-list__item" key={card.id}>
                        <Card id={card.id} name={card.name} currentPage={pageId} />
                    </div>
                ))}
            </div>
            <div className="card-list__pagination">
                <Pagination pagesSize={data.pages} />
            </div>
            {searchParamsItem && <Modal pageId={pageId} item={item} />}
        </>
    );
};

export default CardList;
