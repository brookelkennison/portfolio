import Script from 'next/script';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex items-center justify-center bg-gray-100 flex-col'>
			<Navbar />
			<main>
				{/*~~~~~~~~~~~~~~~ Hero Section ~~~~~~~~~~~~~~~*/}
				<section id='hero' className='relative py-5'>
					{/* blob */}
					<div className='absolute right-0 top-[-20%] w-80 h-80 bg-primaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50' />
					<div className='container'>
						{/* bg image  */}
						<div className='hidden md:block absolute top-0 left-[30%] lg:left-[35%] animate-scaleAnimation'>
							<p className='font-Londrina text-[400px] lg:text-[450px] text-primaryColorLight uppercase -z-10 opacity-5'>hi</p>
						</div>
						{/* hero content  */}
						<div className='flex items-center gap-5'>
							<div className='hero__content space-y-2 md:w-1/2'>
								<h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Hey, I'm Brooke</h3>
								<h1>
									<span className='title'> Web Developer + </span>
									<br />
									<span className='title'> UX Designer </span>
								</h1>
								<div className='relative md:hidden flex justify-center'>
									{/* blob */}
									<div className='absolute left-0 bottom-0 w-80 h-80 bg-primaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50' />
									<Image src='/images/person.jpg' alt='person' height='200' width='300' className='my-10 max-w-[90%] duration-300 origin-center rotate-[4.5deg] border-2 border-primaryColor rounded-[38px] hover:rotate-0 hover:border-primaryColorLight' />
								</div>
								<p className='max-w-xl text-xl pb-5'>I dissect intricate user experience issues to craft solutions focused on integrity, linking billions of individuals.</p>
								<div className='flex items-center flex-wrap gap-5'>
									<button className='btn_outline'>
										Download CV <i className='fa-solid fa-download' />
									</button>
									<div className='flex items-center gap-5'>
										<div className='social-icon'>
											<i className='fa-brands fa-twitter z-10' />
										</div>
										<div className='social-icon'>
											<i className='fa-brands fa-linkedin-in z-10' />
										</div>
										<div className='social-icon'>
											<i className='fa-brands fa-youtube z-10' />
										</div>
										<div className='social-icon'>
											<i className='fa-brands fa-github z-10' />
										</div>
									</div>
								</div>
							</div>
							{/* hero image  */}
							<div className='hero__image relative hidden md:w-1/2 md:flex justify-center'>
								{/* blob */}
								<div className='absolute left-0 bottom-0 w-80 h-80 bg-primaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50' />
								<img src='/images/person.jpg' alt='person' className='my-10 md:w-full lg:max-w-[80%] duration-300 origin-center rotate-[4.5deg] border-2 border-primaryColor rounded-[38px] hover:rotate-0 hover:border-primaryColorLight' />
							</div>
						</div>
						{/* hero footer  */}
						<div className='hero__footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10'>
							<div className='flex items-center gap-3'>
								<p className='text-5xl lg:text-6xl font-bold'>12</p>
								<p>
									Years of <br />
									Experience
								</p>
							</div>
							<div className='flex items-center gap-3'>
								<p className='text-5xl lg:text-6xl font-bold'>50+</p>
								<p>
									Project <br />
									Completed
								</p>
							</div>
							<div className='flex items-center gap-3'>
								<p className='text-5xl lg:text-6xl font-bold'>1.5K</p>
								<p>
									Happy <br />
									Clients
								</p>
							</div>
							<div className='flex items-center gap-3'>
								<p className='text-5xl lg:text-6xl font-bold'>12</p>
								<p>
									Years of <br />
									Experience
								</p>
							</div>
						</div>
					</div>
				</section>
				{/*~~~~~~~~~~~~~~~ My Quality Services ~~~~~~~~~~~~~~~*/}
				<section id='quality_services' className='bg-sectionColor dark:bg-darkSectionColor'>
					<div className='container'>
						<div className='quality_services_top flex flex-col items-center gap-5 text-center'>
							<h2 className='subtitle'>My Quality Services</h2>
							<p className='max-w-2xl'>We transform your ideas and desires into a distinctive web project that inspires both you and your customers.</p>
						</div>
						{/* list section  */}
						<div className='my-10'>
							{/* item 1 */}
							<div className='service_item'>
								<div className='text-xl md:text-2xl lg:text-3xl font-bold flex items-center gap-3 md:w-[40%]'>
									<p className='text-primaryColorLight hover:text-whiteColor'>01</p>
									<p>Branding Design</p>
								</div>
								<div className='ml-auto text-2xl origin-center rotate-45 md:order-last'>
									<i className='fa-solid fa-arrow-right-long' />
								</div>
								<div>
									<p className='md:max-w-[330px] lg:max-w-md xl:max-w-lg'>I dissect complex user experience challenges to devise solutions that prioritize integrity.</p>
								</div>
							</div>
							{/* item 2 */}
							<div className='service_item'>
								<div className='text-xl md:text-2xl lg:text-3xl font-bold flex items-center gap-3 md:w-[40%]'>
									<p className='text-primaryColorLight hover:text-whiteColor'>02</p>
									<p>Web Design</p>
								</div>
								<div className='ml-auto text-2xl origin-center rotate-45 md:order-last'>
									<i className='fa-solid fa-arrow-right-long' />
								</div>
								<div>
									<p className='md:max-w-[330px] lg:max-w-md xl:max-w-lg'>I dissect complex user experience challenges to devise solutions that prioritize integrity.</p>
								</div>
							</div>
							{/* item 3 */}
							<div className='service_item'>
								<div className='text-xl md:text-2xl lg:text-3xl font-bold flex items-center gap-3 md:w-[40%]'>
									<p className='text-primaryColorLight hover:text-whiteColor'>03</p>
									<p>UI/UX Design</p>
								</div>
								<div className='ml-auto text-2xl origin-center rotate-45 md:order-last'>
									<i className='fa-solid fa-arrow-right-long' />
								</div>
								<div>
									<p className='md:max-w-[330px] lg:max-w-md xl:max-w-lg'>I dissect complex user experience challenges to devise solutions that prioritize integrity.</p>
								</div>
							</div>
							{/* item 4 */}
							<div className='service_item'>
								<div className='text-xl md:text-2xl lg:text-3xl font-bold flex items-center gap-3 md:w-[40%]'>
									<p className='text-primaryColorLight hover:text-whiteColor'>04</p>
									<p>Graphics Design</p>
								</div>
								<div className='ml-auto text-2xl origin-center rotate-45 md:order-last'>
									<i className='fa-solid fa-arrow-right-long' />
								</div>
								<div>
									<p className='md:max-w-[330px] lg:max-w-md xl:max-w-lg'>I dissect complex user experience challenges to devise solutions that prioritize integrity.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*~~~~~~~~~~~~~~~ My Recent Works ~~~~~~~~~~~~~~~*/}
				<section id='recent_works' className='container'>
					<div className='recent_works_top flex flex-col items-center gap-5 text-center'>
						<h2 className='subtitle'>My Recent Works</h2>
						<p className='max-w-2xl'>We transform your ideas and desires into a distinctive web project that inspires both you and your customers.</p>
					</div>
					{/* <div class="container bg-red-800 w-[516.1875px]">1</div> */}
					{/* tabs  */}
					<div className='recent_works_tabs relative w-max mx-auto my-10 md:h-12 h-10 text-xs md:text-base grid grid-cols-4 items-center px-[3px] rounded-full bg-sectionColor dark:bg-darkSectionColor border border-primaryColor overflow-hidden transition'>
						<div className='indicator absolute md:h-11 h-9 my-auto top-0 bottom-0 left-0 rounded-full bg-primaryColorLight' />
						<button className='relative block md:h-10 h-8 md:px-6 px-3 tab2 rounded-full text-whiteColor' data-tabs='all'>
							All
						</button>
						<button data-tabs='uiux' className='relative block md:h-10 h-8 md:px-6 px-3 tab2 rounded-full'>
							UX/UI
						</button>
						<button data-tabs='branding' className='relative block md:h-10 h-8 md:px-6 px-3 tab2 rounded-full'>
							Branding
						</button>
						<button data-tabs='app' className='relative block md:h-10 h-8 md:px-6 px-3 tab2 rounded-full'>
							Apps
						</button>
					</div>
					<div className='mt-6 relative rounded-3xl'>
						{/* blob */}
						<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50' />
						<ul className='grid grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2'>
							{/* uiux  */}
							<li className='work_card uiux relative bg-sectionColor dark:bg-darkSectionColor p-5 lg:p-8 rounded-2xl border border-transparent hover:border-primaryColor duration-300 overflow-hidden'>
								<img src='images/project-1.jpg' alt='' className='w-full' />
								<div className='absolute left-0 right-0 bottom-[-100%] p-5 lg:p-8'>
									<div className='flex items-center justify-between bg-gradient-to-r from-primaryColorLight to-primaryColor text-whiteColor p-5 rounded-t-2xl'>
										<div>
											<p className='text-2xl font-bold lg:text-3xl'>Design</p>
											<p className=''>I analyze intricate user experience</p>
										</div>
										<div className='text-2xl rotate-45'>
											<i className='fa-solid fa-arrow-right-long' />
										</div>
									</div>
								</div>
							</li>
							<li className='work_card uiux relative bg-sectionColor dark:bg-darkSectionColor p-5 lg:p-8 rounded-2xl border border-transparent hover:border-primaryColor duration-300 overflow-hidden'>
								<img src='images/project-2.jpg' alt='' className='w-full' />
								<div className='absolute left-0 right-0 bottom-[-100%] p-5 lg:p-8'>
									<div className='flex items-center justify-between bg-gradient-to-r from-primaryColorLight to-primaryColor text-whiteColor p-5 rounded-t-2xl'>
										<div>
											<p className='text-2xl font-bold lg:text-3xl'>Design</p>
											<p className=''>I analyze intricate user experience</p>
										</div>
										<div className='text-2xl rotate-45'>
											<i className='fa-solid fa-arrow-right-long' />
										</div>
									</div>
								</div>
							</li>
							<li className='work_card uiux relative bg-sectionColor dark:bg-darkSectionColor p-5 lg:p-8 rounded-2xl border border-transparent hover:border-primaryColor duration-300 overflow-hidden'>
								<img src='images/project-3.jpg' alt='' className='w-full' />
								<div className='absolute left-0 right-0 bottom-[-100%] p-5 lg:p-8'>
									<div className='flex items-center justify-between bg-gradient-to-r from-primaryColorLight to-primaryColor text-whiteColor p-5 rounded-t-2xl'>
										<div>
											<p className='text-2xl font-bold lg:text-3xl'>Design</p>
											<p className=''>I analyze intricate user experience</p>
										</div>
										<div className='text-2xl rotate-45'>
											<i className='fa-solid fa-arrow-right-long' />
										</div>
									</div>
								</div>
							</li>
							{/* branding  */}
							<li className='work_card branding relative bg-sectionColor dark:bg-darkSectionColor p-5 lg:p-8 rounded-2xl border border-transparent hover:border-primaryColor duration-300 overflow-hidden'>
								<img src='images/project-4.jpg' alt='' className='w-full' />
								<div className='absolute left-0 right-0 bottom-[-100%] p-5 lg:p-8'>
									<div className='flex items-center justify-between bg-gradient-to-r from-primaryColorLight to-primaryColor text-whiteColor p-5 rounded-t-2xl'>
										<div>
											<p className='text-2xl font-bold lg:text-3xl'>Design</p>
											<p className=''>I analyze intricate user experience</p>
										</div>
										<div className='text-2xl rotate-45'>
											<i className='fa-solid fa-arrow-right-long' />
										</div>
									</div>
								</div>
							</li>
							{/* app  */}
							<li className='work_card app relative bg-sectionColor dark:bg-darkSectionColor p-5 lg:p-8 rounded-2xl border border-transparent hover:border-primaryColor duration-300 overflow-hidden'>
								<img src='images/project-5.jpg' alt='' className='w-full' />
								<div className='absolute left-0 right-0 bottom-[-100%] p-5 lg:p-8'>
									<div className='flex items-center justify-between bg-gradient-to-r from-primaryColorLight to-primaryColor text-whiteColor p-5 rounded-t-2xl'>
										<div>
											<p className='text-2xl font-bold lg:text-3xl'>Design</p>
											<p className=''>I analyze intricate user experience</p>
										</div>
										<div className='text-2xl rotate-45'>
											<i className='fa-solid fa-arrow-right-long' />
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>
				{/*~~~~~~~~~~~~~~~ Experience & Education ~~~~~~~~~~~~~~~*/}
				<section id='exp_edu' className='bg-sectionColor dark:bg-darkSectionColor'>
					<div className='container w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
						{/* experience  */}
						<div>
							{/* subtitle & icon  */}
							<div className='exp_top flex items-center gap-3'>
								<div className='text-2xl text-primaryColorLight md:text-3xl lg:text-4xl'>
									<i className='fa-solid fa-medal' />
								</div>
								<h2 className='subtitle'>Experience</h2>
							</div>
							<div className='my-10 space-y-5 md:space-y-10'>
								{/* card 1  */}
								<div className='exp_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight dark:hover:bg-primaryColorLight duration-300'>
									<p className='text-primaryColorLight text-sm font-bold pb-3'>2022-Present</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>Lead Developer</p>
									<p className=''>Blockdots, London</p>
								</div>
								{/* card 2  */}
								<div className='exp_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight dark:hover:bg-primaryColorLight duration-300'>
									<p className='text-primaryColorLight text-sm font-bold pb-3'>2021-2022</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>full stack web developer</p>
									<p className=''>Parsons, The new school</p>
								</div>
								{/* card 3  */}
								<div className='exp_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight dark:hover:bg-primaryColorLight duration-300'>
									<p className='text-primaryColorLight text-sm font-bold pb-3'>2020-2021</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>ui designer</p>
									<p className=''>house of life, Leeds</p>
								</div>
								{/* card 4  */}
								<div className='exp_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight dark:hover:bg-primaryColorLight duration-300'>
									<p className='text-primaryColorLight text-sm font-bold pb-3'>2022-Present</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>junior graphics designer</p>
									<p className=''>Theme Junction, Bursa</p>
								</div>
							</div>
						</div>
						{/* education  */}
						<div>
							{/* subtitle & icon  */}
							<div className='edu_top flex items-center gap-3'>
								<div className='text-2xl text-primaryColorLight md:text-3xl lg:text-4xl'>
									<i className='fa-solid fa-graduation-cap' />
								</div>
								<h2 className='subtitle'>Education</h2>
							</div>
							<div className='my-10 space-y-5 md:space-y-10'>
								{/* card 1  */}
								<div className='edu_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight dark:hover:bg-primaryColorLight duration-300'>
									<p className='text-primaryColorLight text-sm font-bold pb-3'>2020-2023</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>programming course</p>
									<p className=''>Harverd University</p>
								</div>
								{/* card 2  */}
								<div className='edu_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight dark:hover:bg-primaryColorLight duration-300'>
									<p className='text-primaryColorLight text-sm font-bold pb-3'>2022-Present</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>graphic design course</p>
									<p className=''>University of Denmark</p>
								</div>
								{/* card 3  */}
								<div className='edu_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight dark:hover:bg-primaryColorLight duration-300'>
									<p className='text-primaryColorLight text-sm font-bold pb-3'>2016-2020</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>Graphic Design Course</p>
									<p className=''>University of California</p>
								</div>
								{/* card 4  */}
								<div className='edu_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight dark:hover:bg-primaryColorLight duration-300'>
									<p className='text-primaryColorLight text-sm font-bold pb-3'>2010-2011</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>Design &amp; Technology</p>
									<p className=''>Parsons, The New School</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*~~~~~~~~~~~~~~~ My Skills ~~~~~~~~~~~~~~~*/}
				<section id='skills' className='container'>
					<div className='skills_top flex flex-col items-center gap-5 text-center'>
						<h2 className='subtitle'>My Skills</h2>
						<p className='max-w-2xl'>We transform your ideas and desires into a distinctive web project that inspires both you and your customers.</p>
					</div>
					<div className='flex flex-wrap justify-center gap-5 md:gap-10 mt-10'>
						{/* figma icon  */}
						<div className='skills_card max-w-44 w-full'>
							<div className='bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%] hover:grayscale-0 hover:bg-primaryColor border border-transparent hover:border-primaryColorLight duration-300'>
								<img src='images/figma.svg' alt='' className='max-w-16' />
								<p className='text-2xl font-bold text-primaryColorLight'>92%</p>
							</div>
							<p className='text-center text-primaryColorLight mt-3'>Figma</p>
						</div>
						{/* sketch icon  */}
						<div className='skills_card max-w-44 w-full'>
							<div className='bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%] hover:grayscale-0 hover:bg-primaryColor border border-transparent hover:border-primaryColorLight duration-300'>
								<img src='images/sketch.svg' alt='' className='max-w-16' />
								<p className='text-2xl font-bold text-primaryColorLight'>92%</p>
							</div>
							<p className='text-center text-primaryColorLight mt-3'>Sketch</p>
						</div>
						{/* xd icon  */}
						<div className='skills_card max-w-44 w-full'>
							<div className='bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%] hover:grayscale-0 hover:bg-primaryColor border border-transparent hover:border-primaryColorLight duration-300'>
								<img src='images/xd.svg' alt='' className='max-w-16' />
								<p className='text-2xl font-bold text-primaryColorLight'>92%</p>
							</div>
							<p className='text-center text-primaryColorLight mt-3'>XD</p>
						</div>
						{/* WordPess icon  */}
						<div className='skills_card max-w-44 w-full'>
							<div className='bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%] hover:grayscale-0 hover:bg-primaryColor border border-transparent hover:border-primaryColorLight duration-300'>
								<img src='images/wp.svg' alt='' className='max-w-16' />
								<p className='text-2xl font-bold text-primaryColorLight'>92%</p>
							</div>
							<p className='text-center text-primaryColorLight mt-3'>WordPess</p>
						</div>
						{/* React icon  */}
						<div className='skills_card max-w-44 w-full'>
							<div className='bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%] hover:grayscale-0 hover:bg-primaryColor border border-transparent hover:border-primaryColorLight duration-300'>
								<img src='images/react.svg' alt='' className='max-w-16' />
								<p className='text-2xl font-bold text-primaryColorLight'>92%</p>
							</div>
							<p className='text-center text-primaryColorLight mt-3'>React</p>
						</div>
						{/* JavaScript icon  */}
						<div className='skills_card max-w-44 w-full'>
							<div className='bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%] hover:grayscale-0 hover:bg-primaryColor border border-transparent hover:border-primaryColorLight duration-300'>
								<img src='images/js.svg' alt='' className='max-w-16' />
								<p className='text-2xl font-bold text-primaryColorLight'>92%</p>
							</div>
							<p className='text-center text-primaryColorLight mt-3'>JavaScript</p>
						</div>
					</div>
				</section>
				{/*~~~~~~~~~~~~~~~ Recent Blogs ~~~~~~~~~~~~~~~*/}
				<section id='blogs' className='bg-sectionColor dark:bg-darkSectionColor'>
					<div className='container'>
						<div className='blog_top flex flex-col items-center gap-5 text-center'>
							<h2 className='subtitle'>Recent Blogs</h2>
							<p className='max-w-2xl'>We transform your ideas and desires into a distinctive web project that inspires both you and your customers.</p>
						</div>
						<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-5'>
							{/* blog card 1 */}
							<div className='blog_card relative overflow-hidden rounded-3xl cursor-pointer'>
								<img src='/images/blog-1.jpg' alt='' />
								<p className='absolute top-3 left-3 uppercase text-sm bg-primaryColorLight text-whiteColor py-1 px-3 rounded-full'>tutorial</p>
								<div className='blog_card_info absolute left-0 right-0 bottom-0 bg-whiteColor dark:bg-primaryColor mx-4 my-3 rounded-2xl space-y-1 p-3'>
									<div className='text-primaryColorLight flex items-center gap-3 text-sm'>
										<p>
											<i className='fa-regular fa-calendar-days' /> Oct 01, 2022
										</p>
										<p>
											<i className='fa-regular fa-comments' /> Comment (0)
										</p>
									</div>
									<p className='text-xl font-bold capitalize'>top 10 ui ux designers</p>
								</div>
							</div>
							{/* blog card 2 */}
							<div className='blog_card relative overflow-hidden rounded-3xl cursor-pointer'>
								<img src='/images/blog-2.jpg' alt='' />
								<p className='absolute top-3 left-3 uppercase text-sm bg-primaryColorLight text-whiteColor py-1 px-3 rounded-full'>tips</p>
								<div className='blog_card_info absolute left-0 right-0 bottom-0 bg-whiteColor dark:bg-primaryColor mx-4 my-3 rounded-2xl space-y-1 p-3'>
									<div className='text-primaryColorLight flex items-center gap-3 text-sm'>
										<p>
											<i className='fa-regular fa-calendar-days' /> Oct 01, 2022
										</p>
										<p>
											<i className='fa-regular fa-comments' /> Comment (0)
										</p>
									</div>
									<p className='text-xl font-bold capitalize'>App Development Guides</p>
								</div>
							</div>
							{/* blog card 3 */}
							<div className='blog_card relative overflow-hidden rounded-3xl cursor-pointer'>
								<img src='/images/blog-3.jpg' alt='' />
								<p className='absolute top-3 left-3 uppercase text-sm bg-primaryColorLight text-whiteColor py-1 px-3 rounded-full'>freebies</p>
								<div className='blog_card_info absolute left-0 right-0 bottom-0 bg-whiteColor dark:bg-primaryColor mx-4 my-3 rounded-2xl space-y-1 p-3'>
									<div className='text-primaryColorLight flex items-center gap-3 text-sm'>
										<p>
											<i className='fa-regular fa-calendar-days' /> Oct 01, 2022
										</p>
										<p>
											<i className='fa-regular fa-comments' /> Comment (0)
										</p>
									</div>
									<p className='text-xl font-bold capitalize'>Learn Graphic Design Free</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*~~~~~~~~~~~~~~~ Contact ~~~~~~~~~~~~~~~*/}
				<section id='contact' className='container'>
					<div className='flex flex-col md:flex-row-reverse gap-16 md:gap-5 md:items-center'>
						{/* content  */}
						<div className='flex-1 space-y-7 md:space-y-10 lg:pl-20 xl:pl-40'>
							<div className='contact_item flex items-start gap-4'>
								<div className='text-whiteColor bg-gradient-to-b from-primaryColor to-primaryColorLight h-10 w-10 lg:h-14 lg:w-14 rounded-full grid place-items-center'>
									<i className='fa-solid fa-phone' />
								</div>
								<div className='space-y-1'>
									<p className='text-sm'>Phone</p>
									<p className='font-bold hover:text-primaryColorLight duration-300 cursor-pointer'>+01 123 654 8096</p>
								</div>
							</div>
							<div className='contact_item flex items-start gap-4'>
								<div className='text-whiteColor bg-gradient-to-b from-primaryColor to-primaryColorLight h-10 w-10 lg:h-14 lg:w-14 rounded-full grid place-items-center'>
									<i className='fa-regular fa-envelope' />
								</div>
								<div className='space-y-1'>
									<p className='text-sm'>Email</p>
									<p className='font-bold hover:text-primaryColorLight duration-300 cursor-pointer'>gerolddesign@mail.com</p>
								</div>
							</div>
							<div className='contact_item flex items-start gap-4'>
								<div className='text-whiteColor bg-gradient-to-b from-primaryColor to-primaryColorLight h-10 w-10 lg:h-14 lg:w-14 rounded-full grid place-items-center'>
									<i className='fa-solid fa-location-dot' />
								</div>
								<div className='space-y-1'>
									<p className='text-sm'>Address</p>
									<p className='font-bold hover:text-primaryColorLight duration-300 cursor-pointer'>
										Warne Park Street Pine,
										<br />
										FL 33157, New York
									</p>
								</div>
							</div>
						</div>
						{/* contact form  */}
						<form className='contact_form flex-1 bg-sectionColor dark:bg-darkSectionColor border border-primaryColor px-5 py-10 rounded-3xl space-y-3'>
							{/* subtitle & description  */}
							<div className='flex flex-col'>
								<h2 className='subtitle'>Let&apos;s work together!</h2>
								<p className='max-w-2xl py-3'>I create elegantly simple designs and code with passion. It&apos;s as straightforward as that!</p>
							</div>
							<div className='space-y-3 mt-7'>
								<div className='flex flex-col md:flex-row items-center gap-3'>
									<input type='text' placeholder='First name' name='firstname' autoComplete='off' />
									<input type='text' placeholder='Last name' name='lastname' autoComplete='off' />
								</div>
								<div className='flex flex-col md:flex-row items-center gap-3'>
									<input type='email' placeholder='Email Address' name='email' autoComplete='off' />
									<input type='phone' placeholder='Phone number' name='phone' autoComplete='off' />
								</div>
							</div>
							<select>
								<option>Choose a service</option>
								<option value='Branding'>Branding Design</option>
								<option value='Web'>Web Design</option>
								<option value='UIUX'>UI/UX Design</option>
								<option value='App'>App Design</option>
							</select>
							<div className='space-y-3'>
								<textarea name='message' rows={5} placeholder='Message' defaultValue={''} />
								<button className='btn'>
									<span className='z-10'>send message</span>
								</button>
							</div>
						</form>
					</div>
				</section>
			</main>
		</div>
	);
}
