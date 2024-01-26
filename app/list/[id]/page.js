import CardList from '@/app/components/CardList';
import Loading from '@/app/components/Loading';
import Modal from '@/app/components/Modal';
import React, { Suspense } from 'react';

const ListPage = ({ params, searchParams }) => {
    const { id } = params;
    const {item} = searchParams;

    return (
        <div>
            <Suspense fallback={<Loading />}>
                <CardList pageId={id} />
            </Suspense>
            <Suspense fallback={<Loading />}>
                {item && <Modal searchParamsItem={item} pageId={id} />}
            </Suspense>
        </div>
    );
};

export default ListPage;
