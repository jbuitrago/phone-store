export const setWithExpiry = ({ key, value, ttl }) => {
	const now = new Date();

	console.log('now:', now);
	// `item` is an object which contains the original value
	// as well as the time when it's supposed to expire
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	};
	localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpir = key => {
	const itemStr = localStorage.getItem(key);
	// if the item doesn't exist, return null
	console.log('itemStr', itemStr);
	if (!itemStr) {
		return null;
	}
	const item = JSON.parse(itemStr);
	console.log('item:', item);
	const now = new Date();
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key);
		return null;
	}
	return item.value;
};
