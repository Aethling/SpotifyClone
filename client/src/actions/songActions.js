export function setSongUrl(url) {
	return {
		type: 'SET_SONG_URL',
		url
	}
}
export function toggleIsPlaying(boolean) {
	return {
		type: 'TOGGLE_ISPLAYING',
		boolean
	}
}