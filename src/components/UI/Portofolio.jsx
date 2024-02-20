import React , {useState ,  useEffect} from 'react'
import Data from '../../assets/data/portfolioData'
import Modal from './Modal'
const Portofolio = () => {

    const [nextItems , SetNextItems] = useState(6)
    const [portfolios , SetPortfolios] = useState(Data)
    const [selectedTab , SetselectedTab] = useState('all')
    const [showModal , SetshowModal] = useState(false)
    const [activeID , SetActiveID] = useState(null)

    const loadMoreHandler = () => {
        SetNextItems(prev => prev + 3)
    }

    useEffect( ()=> {
        if ( selectedTab === "all"){
            SetPortfolios(Data)
        };

        if(selectedTab === 'web-design'){
            const filterData = Data.filter(item => item.category === 'Web Design')
            SetPortfolios(filterData)
        }

        if(selectedTab === 'Apps'){
            const filterData = Data.filter(item => item.category === 'Apps')
            SetPortfolios(filterData)
        }
    }, [selectedTab])

    const showModalHandeler = id =>{
        SetshowModal(true)
        SetActiveID(id)
    }
    return (
        <section id="portfolio">
            <div className="container">

                <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h3 className="text-headingColor text-[2rem] font-[700]">
                            My recent projects
                        </h3>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={() => SetselectedTab('all')} className="text-smallTextColor border border-solid
                    border-smallTextColor py-2 px-4 rounded-[8px]">
                            All
                        </button>
                        <button onClick={() => SetselectedTab('web-design')}  className="text-smallTextColor border border-solid
                    border-smallTextColor py-2 px-4 rounded-[8px]">
                            Web Design
                        </button>
                        <button onClick={() => SetselectedTab('Apps')} className="text-smallTextColor border border-solid
                    border-smallTextColor py-2 px-4 rounded-[8px]">
                           Apps
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {
                        portfolios?.slice(  0 ,nextItems).map((portfolio, index) => (
                            <div 
                                key={index}
                                data-aos='fade-zoom-in'
                                data-aos-delay='50'
                                data-aos-duration='1000'
                                className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                                <figure>
                                    <img className='rounded-[8px]' src={portfolio.imgUrl} alt="" />
                                </figure>

                                <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 
                            z-[5] hidden group-hover:block">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <button onClick={() => showModalHandeler(portfolio.id)}
                                        className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-6 
                                        rounded-[8px] fomnt-[500] ease-in duration-200'>See Details</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="text-center mt-6">
                    {
                        nextItems < portfolios.length && Data.length > 6 && (
                    <button onClick={loadMoreHandler}
                    className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-6 
                    rounded-[8px] fomnt-[500] ease-in duration-200'>Load More</button>
                    )}
                </div>

            </div>
            
            {
                showModal && <Modal SetshowModal={SetshowModal} activeID={activeID}/>
            }

        </section>
    )
}

export default Portofolio