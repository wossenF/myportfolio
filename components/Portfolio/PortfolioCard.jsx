import Badge from "../Common/Badge";

const PortfolioCard = ({ data, url }) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="block transform transition-transform duration-300 hover:scale-105"
      >
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden h-full">
          <img
            src={data?.image}
            alt="portfolio img"
            className="w-full h-24 sm:h-32 md:h-40 object-cover transition-opacity duration-300 hover:opacity-100 opacity-60"
          />
          <div className="p-4 sm:p-5 transition-all ease-in-out duration-500 bg-gray-800 hover:bg-gray-800">
            <div className="flex justify-between items-center">
              <h3 className="mr-2 font-semibold text-lg md:text-xl text-white leading-tight underline italic">
                {data?.projectName}
              </h3>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-white transition duration-500 hover:text-yellow-500 transform hover:-translate-y-1 hover:scale-110"
              >
                {/* SVG code */}
              </a>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              {data?.projectDetail}
            </p>
            <div className="text-xs sm:text-sm flex flex-wrap gap-2 mt-3">
              {data.technologiesUsed.map((tech, key) => (
                <Badge key={key} title={tech.tech} />
              ))}
            </div>
          </div>
        </div>
      </a>
    );
  };

export default PortfolioCard;