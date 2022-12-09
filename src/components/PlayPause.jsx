import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, hanldePause, handlePlay }) =>
	isPlaying && activeSong?.title === song.title ? (
		<FaPauseCircle size={35} className="text-gray-300" onClick={hanldePause} />
	) : (
		<FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
	);

export default PlayPause;
