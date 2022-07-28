
// *Интерфейсы

interface Rect {
	readonly id: string
	color?: string
	size: {
		width: number
		height: number
	}
}

const rect1: Rect = {
	id: '1231',
	size: {
		width: 23,
		height: 34,
	}
}

const rect3 = {} as Rect
const rect4 = <Rect>{}

// Наследование интерфейсов 

interface RectWithArea extends Rect {
	getArea: () => number
}

const rect5: RectWithArea = {
	id: '324',
	size: {
		width: 34,
		height: 32,
	},
	getArea(): number {
		return this.size.width * this.size.height
	},
}

// Имплементирование интерфейсов для классов

interface IClock {
	time: Date
	setTime(date: Date): void
}

class Clock implements IClock {
	time: Date = new Date()

	setTime(date: Date): void {
		this.time = date
	}
}

// Типы динамическиx свойств обьектов

interface Styles {
	[key : string] : string
}

const css: Styles = {
	border: '1px solid black',
	margin: '2px',
	borderRadius: '5px',
}