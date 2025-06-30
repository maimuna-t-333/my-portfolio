import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-black text-base-content p-6">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Maimunah Tabassum</p>
            </aside>
        </footer>
    );
};

export default Footer;