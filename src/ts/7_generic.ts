
// *Generic - обобщенный динамический тип <T>
// Дженерики (англ. generics) позволяют создавать компоненты, которые совместимы с большим количеством типов, а не только с одним. Это делает компоненты более «открытыми».

const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5]
const arrayOfString: Array<string> = ['Hello', 'Anton']

function reverse<T>(array: T[]): T[] {
	return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfString)