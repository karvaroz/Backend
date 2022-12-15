interface IRepository<T> {
	Insert(entity: T): void;
	Update(entity: T): void;
	Get(id: number): T;
	Delete(id: number): void;
}
