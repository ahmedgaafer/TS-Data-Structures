export type CMP<T> = (a: T, b: T) => boolean;

export type HeapOptions<T> = {
	cmp?: CMP<T>;
};
