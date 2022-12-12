import './header.css'
import { FaHome } from 'react-icons/fa';
import Media from 'react-media';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
    return (
        <div className='header'>
            <div>
                <FaHome className='header-icon'/>
                Home
            </div>
            <Media query={{ maxWidth: 599 }}>
                {matches =>
                    matches ? (
                        <div className='hamburger'><GiHamburgerMenu/></div>
                    ) : (
                        <div className='navs'>
                            <div>Contact</div>
                            <div>Projects</div>
                            <div>Background</div>
                            <div>Intrests</div>
                            <div>Skills</div>
                        </div>
                    )
                }
            </Media>
        </div>
    )
}