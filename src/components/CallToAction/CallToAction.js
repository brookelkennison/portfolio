import image from '../../images/homepage.png'
import Typical from 'react-typical'

const CallToAction = () => {
    return (
      <div className="bg-gray-50">
        <div className="my-24 mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {/* <img className="inline h-80 absolute" src={image} alt="homepage"/> */}
          {/* <div className="absolute bottom-100"> */}
            <div className="font-mono text-5xl flex space-x-3 ">
            <span className="text-white block text-base font-sans tracking-widest font-light">Strengths:</span>
            {/* Text to Animate */}
            <strong className="text-white block text-base font-sans tracking-widest font-light">
                <Typical
                    steps={[
                        'Communication.',
                        3000,
                        'Determination.',
                        3000,
                        'Attention to detail.',
                        3000,
                        'Outgoing personality.',
                        3000,
                        ]}
                        wrapper="p"
                        loop={Infinity}
                />
            </strong>
             {/* Communication.   Determination.   Attention to detail.   */}
          </div>
            <span className="text-white block text-indigo-600 my-3" >Focused on code simplicity, <br/>readability, and performance.</span>
            <span className="text-white block text-sm font-sans tracking-widest font-light">Enneagram 2: The Helper</span>
          {/* </div> */}
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="text-white inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Contact
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default CallToAction;