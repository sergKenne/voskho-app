import Image from 'next/image';
import React from 'react';
import close from '../../public/close.png';
import Link from 'next/link';
import { fetchData } from '../utils/fetchData';

const Modal = async ({ searchParamsItem, pageId }) => {
    const item = await fetchData(`https://taxivoshod.ru/testapi/?w=item&id=${searchParamsItem}`);
    return (
        <div className={`modal ${item ? 'show' : ''}`}>
            <div className="modal__inner">
                <div className="container">
                    <div className="modal__card">
                        <Link href={`/list/${pageId}`} className="modal__btn">
                            <Image src={close} width={20} height={20} alt="icon" />
                        </Link>
                        <div className="modal__body">
                            <h2 className="modal__title">{item?.name}</h2>
                            <p className="modal__desc">{item?.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
