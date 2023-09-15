export function loadImage(imgURL: string): Promise<void> {
	const image = new Image();
	image.src = imgURL;

	return new Promise<void>((resolve, reject) => {
		image.onload = () => resolve();
	});
}
