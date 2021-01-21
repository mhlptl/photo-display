/**
 * 
 * checks if file chosen by client is an image
 * 
 * @param file File
 */
const isImage = (file: File | null): boolean => {
	if (file === null) return false;
	if (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/gif") {
		return true;
	}
	return false;
};

export {isImage};
