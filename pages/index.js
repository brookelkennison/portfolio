import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Home() {
	const form = useRef();
	const [emailSent, setEmailSent] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	const sendEmail = async () => {
		try {
			const result = await emailjs.sendForm(
				'service_a9i7w8t', // Replace with your EmailJS service ID
				'template_z3ha9dq', // Replace with your EmailJS template ID
				form.current,
				'YAe0W4bWvMZF5ATKV' // Replace with your EmailJS user ID
			);
			if (result.status === 200) {
				setEmailSent(true);
				form.current.reset();
			}
		} catch (error) {
			console.error('Error:', error.text);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await sendEmail();
	};

	const centerTab = (event) => {
		// Use scrollIntoView to center the clicked tab
		event.target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
	};

	return (
		<div className='bg-gray-100 overflow-hidden'>
			<Navbar />
			<main>
				{/*~~~~~~~~~~~~~~~ Hero Section ~~~~~~~~~~~~~~~*/}
				<section id='hero' className='relative py-5'>
					{/* blob */}
					<div className='container'>
						<div className='hidden md:block absolute top-0 left-[30%] lg:left-[35%] animate-scaleAnimation'>
							<p className='font-Londrina text-[400px] lg:text-[450px] text-primaryColorLight uppercase -z-10 opacity-5'>hi</p>
						</div>
						{/* hero content  */}
						<div className='flex items-center gap-5 justify-center'>
							<div className='hero__content space-y-2 md:w-1/2'>
								<h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Hey, I&apos;m Brooke</h3>
								<h1>
									<span className='title'> Frontend Developer + </span>
									<br />
									<span className='title'> UI/UX Designer </span>
								</h1>
								<div className='relative md:hidden flex justify-center'>
									{/* blob */}
									<div className='absolute left-0 bottom-0 w-80 h-80 bg-primaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50' />
									<Image src='/images/person.jpg' alt='person' height='200' width='300' className='my-10 max-w-[90%] duration-300 origin-center rotate-[4.5deg] border-2 border-primaryColor rounded-[38px] hover:rotate-0 hover:border-primaryColorLight' />
								</div>
								<div className='max-w-xl pb-2'>
									<p className={isExpanded ? '' : 'text-truncate'}>As a driven Frontend Developer and UI/UX Designer with hands-on experience leading projects and collaborating across teams, I specialize in designing and developing robust web applications that prioritize user satisfaction and deliver measurable success. My expertise in React, Redux, modern state management, and CSS frameworks allows me to build seamless, high-performance applications that resonate with users and meet business objectives.</p>
									<a href='#' className='text-primaryColorLight' onClick={toggleExpand}>
										{isExpanded ? 'See Less' : 'See More'}
									</a>
								</div>
								<div className='flex items-center flex-wrap gap-5'>
									<a href='/assets/BrookeKennisonResume.pdf' download>
										<button className='btn_outline'>
											Download CV <i className='fa-solid fa-download' />
										</button>
									</a>
									<div className='flex items-center gap-5'>
										{/* LinkedIn */}
										<Link href='https://www.linkedin.com/in/brookekennison/'>
											<div className='social-icon'>
												<i className='fa-brands fa-linkedin-in z-10' />
											</div>
										</Link>
										{/* GitHub */}
										<Link href='https://github.com/brookelkennison'>
											<div className='social-icon'>
												<i className='fa-brands fa-github z-10' />
											</div>
										</Link>
									</div>
								</div>
							</div>
							{/* hero image  */}
							<div className='hero__image relative hidden md:w-1/2 md:flex justify-center'>
								{/* blob */}
								<div className='absolute left-0 bottom-0 w-80 h-80 bg-primaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50' />
								<Image src='/images/person.jpg' alt='person' className='my-10 md:w-full lg:max-w-[80%] duration-300 origin-center rotate-[4.5deg] border-2 border-primaryColor rounded-[38px] hover:rotate-0 hover:border-primaryColorLight' width={500} height={500} />{' '}
							</div>
						</div>
						{/* hero footer  */}
						<div className='hero__footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
							<div className='flex items-center gap-3'>
								<p className='text-5xl lg:text-6xl font-bold'>5</p>
								<p>
									Years of <br />
									Experience
								</p>
							</div>
							<div className='flex items-center gap-3'>
								<p className='text-5xl lg:text-6xl font-bold'>80+</p>
								<p>
									Designs <br />
									Created
								</p>
							</div>
							<div className='flex items-center gap-3'>
								<p className='text-5xl lg:text-6xl font-bold'>10K+</p>
								<p>
									Dev <br />
									Hours
								</p>
							</div>
						</div>
					</div>
				</section>
				{/*~~~~~~~~~~~~~~~ My Quality Services ~~~~~~~~~~~~~~~*/}
				<section id='quality_services' className='bg-sectionColor dark:bg-darkSectionColor'>
					<div className='container'>
						<div className='quality_services_top flex flex-col items-center gap-5 text-center'>
							<h2 className='subtitle'>What I Offer</h2>
							<p className='max-w-3xl'>With a blend of technical expertise, creative design, and a user-first approach, I’m here to help you build web applications that stand out and deliver real value. Whether you’re looking to enhance user experience, streamline your codebase, or implement modern technologies, I provide the solutions you need to achieve your goals.</p>
						</div>
						{/* list section  */}
						<div className='my-10'>
							{/* item 1 */}
							<div className='service_item'>
								<div className='text-xl md:text-2xl font-bold flex items-center gap-3 md:w-[40%]'>
									<p className='text-primaryColorLight hover:text-whiteColor'>01</p>
									<p>User-Centered Development</p>
								</div>
								<div className='ml-auto text-2xl origin-center rotate-45 md:order-last'>
									<i className='fa-solid fa-arrow-right-long' />
								</div>
								<div>
									<p className='md:max-w-[330px] lg:max-w-md xl:max-w-lg'>I prioritize the end user in every decision, ensuring applications are intuitive, accessible, and enjoyable to use. By focusing on user experience from the start, I create products that not only meet but exceed user expectations, driving higher engagement and satisfaction. </p>
								</div>
							</div>
							{/* item 2 */}
							<div className='service_item'>
								<div className='text-xl md:text-2xl font-bold flex items-center gap-3 md:w-[40%]'>
									<p className='text-primaryColorLight hover:text-whiteColor'>02</p>
									<p>Modern Frontend Expertise</p>
								</div>
								<div className='ml-auto text-2xl origin-center rotate-45 md:order-last'>
									<i className='fa-solid fa-arrow-right-long' />
								</div>
								<div>
									<p className='md:max-w-[330px] lg:max-w-md xl:max-w-lg'>With hands-on experience in React, Redux, Next.js, and state management solutions, I bring a technical edge that allows your application to perform seamlessly. My approach integrates cutting-edge frontend technologies with best practices to deliver fast, scalable, and future-proof solutions.</p>
								</div>
							</div>
							{/* item 3 */}
							<div className='service_item'>
								<div className='text-xl md:text-2xl font-bold flex items-center gap-3 md:w-[40%]'>
									<p className='text-primaryColorLight hover:text-whiteColor'>03</p>
									<p>Seamless UI/UX Integration</p>
								</div>
								<div className='ml-auto text-2xl origin-center rotate-45 md:order-last'>
									<i className='fa-solid fa-arrow-right-long' />
								</div>
								<div>
									<p className='md:max-w-[330px] lg:max-w-md xl:max-w-lg'>I bridge the gap between design and development, creating interfaces that are as functional as they are beautiful. From user flow mapping to advanced prototyping in Figma, I bring your ideas to life with an attention to detail that enhances usability and aesthetic appeal.</p>
								</div>
							</div>
							{/* item 4 */}
							<div className='service_item'>
								<div className='text-xl md:text-2xl font-bold flex items-center gap-3 md:w-[40%]'>
									<p className='text-primaryColorLight hover:text-whiteColor'>04</p>
									<p>Reliable Project Leadership</p>
								</div>
								<div className='ml-auto text-2xl origin-center rotate-45 md:order-last'>
									<i className='fa-solid fa-arrow-right-long' />
								</div>
								<div>
									<p className='md:max-w-[330px] lg:max-w-md xl:max-w-lg'>As an experienced lead developer, I’m committed to clear communication, deadline management, and effective stakeholder engagement. I ensure every project stage aligns with your vision, allowing you to focus on your business goals while I handle the technical and creative execution.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/*~~~~~~~~~~~~~~~ My Recent Works ~~~~~~~~~~~~~~~*/}
				<section id='recent_works' className='container'>
					<div className='recent_works_top flex flex-col items-center gap-5 text-center'>
						<h2 className='subtitle'>My Recent Works</h2>
						<p className='max-w-3xl'>My inspiration comes from envisioning a world where applications are more than just tools—they are seamless, user-friendly solutions that enhance people’s lives across various industries. I love the creative challenge of building development as a form of art, using modern technologies and innovative designs to push boundaries. My mission is to partner with companies looking to create applications that don’t just work but inspire, uplift, and empower users, building success from both a functional and an aesthetic standpoint.</p>
					</div>
					{/* <div class='recent_works_tabs flex overflow-x-auto w-screen pb-1 dark:bg-darkSectionColor '>
						<div className='scrollbar-hide rounded-full bg-sectionColor border border-primaryColor flex'>
							<div class='min-w-[120px] px-4 py-2 rounded-lg mx-2 text-center whitespace-nowrap relative'>Tab 1</div>
							<div class='min-w-[120px] px-4 py-2 rounded-lg mx-2 text-center whitespace-nowrap relative'>Tab 2</div>
							<div class='min-w-[120px] px-4 py-2 rounded-lg mx-2 text-center whitespace-nowrap relative'>Tab 3</div>
							<div class='min-w-[120px] px-4 py-2 rounded-lg mx-2 text-center whitespace-nowrap relative'>Tab 4</div>
						</div>
					</div> */}
					<div class='recent_works_tabs relative flex overflow-x-auto sm:w-screen md:w-auto pb-1 dark:bg-darkSectionColor my-5 snap-x snap-mandatory'>
						<div class='md:w-full w-auto justify-between flex scrollbar-hide md:h-11 h-9 rounded-full bg-sectionColor border text-xs border-primaryColor flex transition snap-center'>
							<div class='indicator absolute md:h-11 h-9 my-auto bottom-1 left-0 rounded-full bg-primaryColorLight'></div>

							<button class='min-w-[140px] whitespace-nowrap relative block md:h-10 h-8 md:px-6 px-3 tab2 rounded-full text-whiteColor snap-start' data-tabs='all' onClick={(event) => centerTab(event)}>
								All
							</button>
							<button class='min-w-[140px] whitespace-nowrap relative block md:h-10 h-8 md:px-6 px-3 tab2 rounded-full snap-start' data-tabs='development' onClick={(event) => centerTab(event)}>
								Development
							</button>
							<button class='min-w-[140px] whitespace-nowrap relative block md:h-10 h-8 md:px-6 px-3 tab2 rounded-full snap-start' data-tabs='uiux' onClick={(event) => centerTab(event)}>
								UI/UX Design
							</button>
							<button class='min-w-[140px] whitespace-nowrap relative block md:h-10 h-8 md:px-6 px-3 tab2 rounded-full snap-start' data-tabs='projectManagement' onClick={(event) => centerTab(event)}>
								Project Management
							</button>
						</div>
					</div>

					<div className='mt-6 relative rounded-3xl'>
						{/* blob */}
						<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50' />
						<ul className='grid grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2'>
							{/* Development, ui/ux, project management  */}
							<li className='work_card development  uiux projectManagement relative bg-sectionColor dark:bg-darkSectionColor p-5 lg:p-8 rounded-2xl border border-transparent hover:border-primaryColor duration-300 overflow-hidden'>
								<Image src='/images/Bookfinity.png' alt='Bookfinity logo' className='w-full' width={500} height={500} />
								<div className='absolute left-0 right-0 bottom-[-100%] p-5 lg:p-8'>
									<div className='flex items-center justify-between bg-gradient-to-r from-primaryColorLight to-primaryColor text-whiteColor p-5 rounded-t-2xl'>
										<div>
											<p className='text-2xl font-bold lg:text-3xl'>Development, Design, UI/UX</p>
											<small>
												<a href='https://bookfinity.com/' target='_blank' className=''>
													Bookfinity.com
												</a>
											</small>
											<p className=''>I helped design, develop, and implement UX improvements for a bookshelf web app, enhancing its functionality and creating a more seamless, user-friendly experience.</p>
										</div>
										<div className='text-2xl rotate-45'>
											<i className='fa-solid fa-arrow-right-long' />
										</div>
									</div>
								</div>
							</li>
							<li className='work_card development relative bg-sectionColor dark:bg-darkSectionColor p-5 lg:p-8 rounded-2xl border border-transparent hover:border-primaryColor duration-300 overflow-hidden'>
								<Image width={500} height={500} src='/images/Creedence.png' alt='' className='w-full' />
								<div className='absolute left-0 right-0 bottom-[-100%] p-5 lg:p-8'>
									<div className='flex items-center justify-between bg-gradient-to-r from-primaryColorLight to-primaryColor text-whiteColor p-5 rounded-t-2xl'>
										<div className='overflow-y-auto' style={{ maxHeight: '230px' }}>
											<p className='text-2xl font-bold lg:text-3xl'>Development, Design, UI/UX</p>
											<small>
												<a className='text-whiteColor' href='https://creedencecontracting.com/' target='_blank' rel='noopener noreferrer'>
													creedencecontracting.com
												</a>
											</small>
											<p>Created an SEO-focused website for a small construction business, writing targeted web copy to showcase their services and expertise. Completed comprehensive QA testing to ensure a seamless user experience, providing the company with a reliable digital platform to reach and engage clients in their service area.</p>
										</div>
										<div className='text-2xl rotate-45'>
											<i className='fa-solid fa-arrow-right-long' />
										</div>
									</div>
								</div>
							</li>
							<li className='work_card development relative bg-sectionColor dark:bg-darkSectionColor p-5 lg:p-8 rounded-2xl border border-transparent hover:border-primaryColor duration-300 overflow-hidden'>
								<Image width={500} height={500} src='/images/MCS.png' alt='' className='w-full' />
								<div className='absolute left-0 right-0 bottom-[-100%] p-5 lg:p-8'>
									<div className='flex items-center justify-between bg-gradient-to-r from-primaryColorLight to-primaryColor text-whiteColor p-5 rounded-t-2xl'>
										<div className='overflow-y-auto' style={{ maxHeight: '230px' }}>
											<p className='text-2xl font-bold lg:text-3xl'>Development, Design, UI/UX</p>
											<small>
												<a className='text-whiteColor' href='https://mcslawncarefw.com/' target='_blank' rel='noopener noreferrer'>
													mcslawncarefw.com
												</a>
											</small>
											<p>Developed a clean, user-friendly website for a small lawn care business, focusing on clear messaging and SEO-optimized web copy to enhance local search visibility. Conducted thorough QA testing to ensure functionality across all devices, delivering a professional online presence that attracts new clients.</p>
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
									<p className='text-primaryColorLight text-sm font-bold pb-3'>March 2022-Present</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>Frontend Developer</p>
									<p className=''>Ingram Content Group - Remote</p>
								</div>
								<div className='exp_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight dark:hover:bg-primaryColorLight duration-300'>
									<p className='text-primaryColorLight text-sm font-bold pb-3'>March 2022-Present</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>UI/UX Designer</p>
									<p className=''>Ingram Content Group - Remote</p>
								</div>
								{/* card 2  */}
								<div className='exp_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight dark:hover:bg-primaryColorLight duration-300'>
									<p className='text-primaryColorLight text-sm font-bold pb-3'>2021-Present</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>Website Designer/Developer</p>
									<p className=''>Kennison Creative - Self Owned</p>
								</div>
								{/* card 3  */}
								<div className='exp_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight dark:hover:bg-primaryColorLight duration-300'>
									<p className='text-primaryColorLight text-sm font-bold pb-3'>2021-2022</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>Software Engineer</p>
									<p className=''>Sweetwater Sound - Hybrid</p>
								</div>
								{/* card 4  */}
								<div className='exp_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight dark:hover:bg-primaryColorLight duration-300'>
									<p className='text-primaryColorLight text-sm font-bold pb-3'>2020-2021</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>QA Website Testing</p>
									<p className=''>Sweetwater Sound - Hybrid</p>
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
									<p className='text-primaryColorLight text-sm font-bold pb-3'>2019</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>Software Engineering Fundamentals</p>
									<p className=''>General Assembly</p>
								</div>
								{/* card 2  */}
								<div className='edu_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight dark:hover:bg-primaryColorLight duration-300'>
									<p className='text-primaryColorLight text-sm font-bold pb-3'>2018</p>
									<p className='text-xl font-bold lg:text-2xl xl:text-3xl uppercase'>Computer Science Coursework</p>
									<p className=''>Purdue University Indianapolis</p>
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
								<Image width={50} height={50} src='/images/figma.svg' alt='' className='max-w-16' />
								<p className='text-2xl font-bold text-primaryColorLight'>60%</p>
							</div>
							<p className='text-center text-primaryColorLight mt-3'>Figma</p>
						</div>
						{/* WordPess icon  */}
						<div className='skills_card max-w-44 w-full'>
							<div className='bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%] hover:grayscale-0 hover:bg-primaryColor border border-transparent hover:border-primaryColorLight duration-300'>
								<Image width={50} height={50} src='/images/wp.svg' alt='' className='max-w-16' />
								<p className='text-2xl font-bold text-primaryColorLight'>75%</p>
							</div>
							<p className='text-center text-primaryColorLight mt-3'>WordPess</p>
						</div>
						{/* React icon  */}
						<div className='skills_card max-w-44 w-full'>
							<div className='bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%] hover:grayscale-0 hover:bg-primaryColor border border-transparent hover:border-primaryColorLight duration-300'>
								<Image src='/images/react.svg' alt='' className='max-w-16' width={50} height={50} />
								<p className='text-2xl font-bold text-primaryColorLight'>90%</p>
							</div>
							<p className='text-center text-primaryColorLight mt-3'>React.js</p>
						</div>
						{/* JavaScript icon  */}
						<div className='skills_card max-w-44 w-full'>
							<div className='bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%] hover:grayscale-0 hover:bg-primaryColor border border-transparent hover:border-primaryColorLight duration-300'>
								<Image width={50} height={50} src='/images/js.svg' alt='' className='max-w-16' />
								<p className='text-2xl font-bold text-primaryColorLight'>75%</p>
							</div>
							<p className='text-center text-primaryColorLight mt-3'>JavaScript</p>
						</div>
						{/* TypeScript icon  */}
						<div className='skills_card max-w-44 w-full'>
							<div className='bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%] hover:grayscale-0 hover:bg-primaryColor border border-transparent hover:border-primaryColorLight duration-300'>
								<Image width={50} height={50} src='/images/typescript.svg' alt='' className='max-w-16' />
								<p className='text-2xl font-bold text-primaryColorLight'>50%</p>
							</div>
							<p className='text-center text-primaryColorLight mt-3'>TypeScript</p>
						</div>
						{/* Next.js icon  */}
						<div className='skills_card max-w-44 w-full'>
							<div className='bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%] hover:grayscale-0 hover:bg-primaryColor border border-transparent hover:border-primaryColorLight duration-300'>
								<Image width={50} height={50} src='/images/next-js.svg' alt='' className='max-w-16' />
								<p className='text-2xl font-bold text-primaryColorLight'>85%</p>
							</div>
							<p className='text-center text-primaryColorLight mt-3'>Next.js</p>
						</div>
					</div>
				</section>
				{/*~~~~~~~~~~~~~~~ Recent Blogs ~~~~~~~~~~~~~~~*/}
				{/* <section id='blogs' className='bg-sectionColor dark:bg-darkSectionColor'>
					<div className='container'>
						<div className='blog_top flex flex-col items-center gap-5 text-center'>
							<h2 className='subtitle'>Recent Blogs</h2>
							<p className='max-w-2xl'>We transform your ideas and desires into a distinctive web project that inspires both you and your customers.</p>
						</div>
						<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-5'>
							<div className='blog_card relative overflow-hidden rounded-3xl cursor-pointer'>
								<Image width={50} height={50}  src='/images/blog-1.jpg' alt='' />
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
							<div className='blog_card relative overflow-hidden rounded-3xl cursor-pointer'>
								<Image width={50} height={50}  src='/images/blog-2.jpg' alt='' />
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
							<div className='blog_card relative overflow-hidden rounded-3xl cursor-pointer'>
								<Image width={50} height={50}  src='/images/blog-3.jpg' alt='' />
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
				</section> */}
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
									<p className='font-bold hover:text-primaryColorLight duration-300 cursor-pointer'>(615) 679 6644</p>
								</div>
							</div>
							<div className='contact_item flex items-start gap-4'>
								<div className='text-whiteColor bg-gradient-to-b from-primaryColor to-primaryColorLight h-10 w-10 lg:h-14 lg:w-14 rounded-full grid place-items-center'>
									<i className='fa-regular fa-envelope' />
								</div>
								<div className='space-y-1'>
									<p className='text-sm'>Email</p>
									<p className='font-bold hover:text-primaryColorLight duration-300 cursor-pointer'>brookelkennison@gmail.com</p>
								</div>
							</div>
							<div className='contact_item flex items-start gap-4'>
								<div className='text-whiteColor bg-gradient-to-b from-primaryColor to-primaryColorLight h-10 w-10 lg:h-14 lg:w-14 rounded-full grid place-items-center'>
									<i className='fa-solid fa-location-dot' />
								</div>
								<div className='space-y-1'>
									<p className='text-sm'>Location</p>
									<p className='font-bold hover:text-primaryColorLight duration-300 cursor-pointer'>
										Indianapolis, IN
										<br />
										USA
									</p>
								</div>
							</div>
						</div>
						{/* contact form  */}

						<form ref={form} onSubmit={handleSubmit} className='contact_form flex-1 bg-sectionColor dark:bg-darkSectionColor border border-primaryColor px-5 py-10 rounded-3xl space-y-3'>
							{/* subtitle & description  */}
							<div className='flex flex-col'>
								<h2 className='subtitle'>Let&apos;s work together!</h2>
								<p className='max-w-2xl py-3'>I create elegantly simple designs and code with passion. It&apos;s as straightforward as that!</p>
							</div>

							{emailSent ? (
								<div className='space-y-3 mt-7'>
									<div className='flex flex-col md:flex-row items-center gap-3'>
										<h4>Thank you for contacting us! We will get back to you soon.</h4>
									</div>
								</div>
							) : (
								<>
									<div className='space-y-3 mt-7'>
										<div className='flex flex-col md:flex-row items-center gap-3'>
											<input type='text' placeholder='First name' name='first_name' autoComplete='off' />
											<input type='text' placeholder='Last name' name='last_name' autoComplete='off' />
										</div>
										<div className='flex flex-col md:flex-row items-center gap-3'>
											<input type='email' placeholder='Email Address' name='email' autoComplete='off' />
											<input type='phone' placeholder='Phone number' name='phone' autoComplete='off' />
										</div>
									</div>
									<div className='space-y-3'>
										<textarea name='message' rows={5} placeholder='Message' defaultValue={''} />
										<button className='btn' type='submit'>
											<span className='z-10'>send message</span>
										</button>
									</div>
								</>
							)}
						</form>
					</div>
				</section>
			</main>
		</div>
	);
}
