import CardList from '@/app/components/CardList';
import Loading from '@/app/components/Loading';
import React, { Suspense } from 'react';

const ListPage = ({ params, searchParams }) => {
    const { id } = params;
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <CardList searchParamsItem={searchParams.item} pageId={id} />
            </Suspense>
        </div>
    );
};

export default ListPage;
