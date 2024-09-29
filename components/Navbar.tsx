import React from 'react';
import MyImage from '../public/assets/logo-dark.png';
import Image from 'next/image';

const Navbar: React.FC = () => {
	return (
		<header id='navbar' className='sticky top-0 z-50 duration-300 w-full'>
			<nav className='relative container flex justify-between items-center'>
				<div className='py-5 pe-4'>
					<Image src={MyImage} height={50} width={50} alt='my logo' />
				</div>
				<div className='hidden absolute top-0 left-0 bg-primaryColor w-full py-24 lg:bg-transparent lg:block lg:static lg:py-0 lg:border-none lg:w-auto lg:ml-auto' id='nav-menu'>
					<ul className='flex flex-col items-center text-center gap-8 lg:gap-5 lg:flex-row'>
						<li>
							<a href='#quality_services' className='nav-link'>
								Services
							</a>
						</li>
						<li>
							<a href='#recent_works' className='nav-link'>
								Works
							</a>
						</li>
						<li>
							<a href='#exp_edu' className='nav-link'>
								Resume
							</a>
						</li>
						<li>
							<a href='#skills' className='nav-link'>
								Skills
							</a>
						</li>
						<li>
							<a href='#blogs' className='nav-link'>
								Blogs
							</a>
						</li>
						<li>
							<a href='#contact' className='nav-link'>
								Contact
							</a>
						</li>
						<li>
							<button className='btn ml-10'>
								<span className='z-10'>Hire Me!</span>
							</button>
						</li>
					</ul>

					<div className='absolute top-6 right-3 md:right-8 text-whiteColor text-3xl cursor-pointer lg:hidden' id='nav-close'>
						<i className='ri-close-line'></i>
					</div>
				</div>

				<div className='flex items-center gap-5'>
					<i className='ri-moon-line cursor-pointer ml-4 text-2xl' id='theme-toggle'></i>

					<div className='lg:hidden' id='hamburger'>
						<i className='ri-menu-2-line cursor-pointer text-2xl'></i>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
