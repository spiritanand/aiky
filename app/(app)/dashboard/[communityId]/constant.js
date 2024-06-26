export const MINUTESDIVISOR = 60 * 1000;
export const HOURSDIVISOR = 24 * 60 * 1000;
export const DAYSDIVISOR = 30 * 24 * 60 * 1000;
export const MONTHSDIVISOR = 12 * 30 * 24 * 60 * 1000;
export const YEARSDIVISOR = 365 * 24 * 60 * 1000;

export const MINUTES = "minutes";
export const HOURS = "hours";
export const DAYS = "days";
export const MONTHS = "months";
export const YEARS = "years";

// write function after first draft
// export const const calculateTime = (time) => {

// }

export const feedFooterOptions = {
	Like: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-4 h-4"
		>
			<title>Like</title>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
			/>
		</svg>
	),
	// Comment: (
	// 	<svg
	// 		xmlns="http://www.w3.org/2000/svg"
	// 		fill="none"
	// 		viewBox="0 0 24 24"
	// 		strokeWidth={1.5}
	// 		stroke="currentColor"
	// 		className="w-4 h-4"
	// 	>
	// 		<title>Comment</title>
	// 		<path
	// 			strokeLinecap="round"
	// 			strokeLinejoin="round"
	// 			d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
	// 		/>
	// 	</svg>
	// ),
	// Share: 'ShareSvg'
};

export const createNewPostText = 'What do you want to share with your members?'

export const worldIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
	<title>globe</title>
<path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
