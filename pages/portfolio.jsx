import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";

const Portfolio = () => {
    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching portfolio:', error)))

    return (
        <BannerLayout>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 my-6">
                {isLoading ? (
                    // Skeleton loading while data is being fetched
                    [1, 2, 3].map((_, index) => (
                        <div key={index}>
                            <Skeleton.Image style={{ width: "100%", height: "200px", marginBottom: "12px" }} />
                            <Skeleton active paragraph={{ rows: 3 }} />
                        </div>
                    ))
                ) : error ? (
                    // Display error message if there's an error
                    <div>Error fetching portfolio data</div>
                ) : (
                    // Render portfolio cards if data is available
                    data.map((project, index) => (
                        <PortfolioCard key={index} data={project} url={project.url} />
                    ))
                )}
            </div>
            <Footer />
        </BannerLayout>
    );
};

export default Portfolio;
