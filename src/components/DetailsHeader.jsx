import { Link } from "react-router-dom";
const DetailsHeader = ({ songData, artistId, artistData }) => {
  const song =
    songData?.resources["shazam-songs"][songData.data[0]?.id]?.attributes;

  const artist = artistData?.artists[artistId]?.attributes;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          src={artistId ? artist?.artwork?.url : song?.images?.coverArtHq}
          alt="images"
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artist?.name : song?.title}
          </p>
          {!artistId && (
            <Link
              to={`/artists/${
                songData?.resources["shazam-songs"][songData.data[0]?.id]
                  ?.relationships?.artists?.data[0]?.id
              }`}
            >
              <p className="textbase text-gray-400 mt-2">{song?.artist}</p>
            </Link>
          )}
          <p className="textbase text-gray-400 mt-2">
            {artistId ? artist?.genreNames[0] : song?.genres?.primary}
          </p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
