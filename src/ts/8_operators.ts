
// *Operators - вспомогательные операторы

// keyof - перебор ключей интерфейса

interface Person {
	name: string
	age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'
// key = 'height' - error


// Exclude | Pick - исключить | забрать ключи интерфейса

// Карты (maps) | Асоциативный тип
type User = {
	_id: number
	name: string
	email: string
	createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id' - error