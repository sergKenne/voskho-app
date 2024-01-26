'use client';

import React from 'react';

const ErrorPage = ({ error }) => {
    return <div className="error">Error: {error.message}</div>;
};

export default ErrorPage;
