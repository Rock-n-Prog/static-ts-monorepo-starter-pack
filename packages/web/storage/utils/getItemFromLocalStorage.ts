type GetItemFromLocaleStorageParams<T> = Readonly<{
  key: string;
  initialValue: T;
}>;

function getItemFromLocaleStorage<T>({ key, initialValue }: GetItemFromLocaleStorageParams<T>) {
  const item = window?.localStorage.getItem(key);
  return Promise.resolve(item ? (JSON.parse(item) as T) : initialValue);
}

export type { GetItemFromLocaleStorageParams };
export default getItemFromLocaleStorage;
