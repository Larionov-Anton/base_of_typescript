
// *Type Guards - Предохранители типов 

function strip(x: string | number) {
	if (typeof x === 'number') {
		return x.toFixed(2)
	}
	return x.trim()
}

// instanceof - проверить тип соответствия класса

class MyResponse {
	header = 'response header'
	result = 'response result'
}

class MyError {
	header = 'error header'
	message = 'error message'
}

function handle(res: MyResponse | MyError) {
	if (res instanceof MyResponse) {
		return {
			info: res.header + res.result
		}
	} else {
		return {
			info: res.header + res.message
		}
	}
}

// ==================================

type AlertType = 'sacsess' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
	// ......
}

setAlertType('sacsess')
setAlertType("danger")
// setAlertType('default') - error