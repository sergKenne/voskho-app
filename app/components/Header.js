import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <Link href="/" className="header__logo">
                        Восход
                    </Link>
                    <ul className="header__nav">
                        <li className="header__nav-item">
                            <Link href="/" className="header__nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
