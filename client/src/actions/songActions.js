export function setNowPlaying(track) {
	return {
		type: 'SET_NOW_PLAYING',
		track
	}
}
export function toggleIsPlaying(boolean) {
	return {
		type: 'TOGGLE_ISPLAYING',
		boolean
	}
}
export function selectedAlbumImage(albumImage) {
	return {
		type: 'SELECTED_ALBUM_IMAGE',
		albumImage
	}
}