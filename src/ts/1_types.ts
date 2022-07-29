
// *Типы данных

const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42

const message: string = 'Typescript'

// Векторы - Векторы — это последовательная индексированная структура данных, содержащая фиксированные типы для всех элементов.
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
// Многомерный массив
let numbersArray: number[][] = [[1,2,3,4,5], [6,7,8,9,10]]

// Кортежи Tuple - отдельный тип данных для массивов из разных типов
const contact: [string, number] = ['Anton', 1234567]

// Any - отдельный тип данных для разблокировки переопределения типов переменных
let variable: any = 42
variable = 'String'

// As  - кастует переменную одного типа в другой
variable as string

// Void - отдельный тип данных для функций не возвращающих данные
function sayMyName(name: string): void {
	console.log('Anton')
}

// Never - отдельный тип данных для функций возвращающих ошибку или бесконечно выполняющихся
function throwError(message: string): never {
	throw new Error(message)
}

function infinite(): never {
	while(true) {

	}
}

// ==========================================================================

// Type (alias) - создать свой собственный тип данных 

type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 123
const id2: ID = 'sdf'

type SomeType = string | null | undefined

// 