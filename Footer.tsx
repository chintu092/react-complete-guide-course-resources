import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer>
            <ul className="footer_categories">
                <li>
                    <Link to='/posts/categories/Agriculture'>Agriculture</Link>
                </li>
                <li>
                    <Link to='/posts/categories/Business'>Business</Link>
                </li>
                <li>
                    <Link to='/posts/categories/Education'>Education</Link>
                </li>
                <li>
                    <Link to='/posts/categories/Entertainment'>Entertainment</Link>
                </li>
                <li>
                    <Link to='/posts/categories/Art'>Art</Link>
                </li>
                <li>
                    <Link to='/posts/categories/Investment'>Investment</Link>
                </li>
                <li>
                    <Link to='/posts/categories/Uncategorized'>Uncategorized</Link>
                </li>
                <li>
                    <Link to='/posts/categories/Weather'>Weather</Link>
                </li>
            </ul>
           <div className="footer__copyright">
            <small>
                All Right Reserved &copy; Copyright, React Blog.
            </small>
            </div>
        </footer>
    )
}

export default Footer;
