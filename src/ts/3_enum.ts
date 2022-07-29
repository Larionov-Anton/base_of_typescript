
// *Enum - Перечисление | Структурирование кода

// ========================================================

// Числовые перечисления

enum Membership {
	Simple, // 0
	Standart, // 1
	Premium // 2
}

enum Membership2 {
	Simple = 0,
	Standart = 1,
	Premium = 2
}

const membership = Membership.Premium
// console.log(membership) - 2
const membershipReverse = Membership[2]
// console.log(membershipReverse) - 'Premium'

//==========================================================

// Текстовые перечисления

enum SocialMedia {
	VK = 'VK',
	FACEBOOK = 'FACEBOOK',
	INSTAGRAM = 'INSTAGRAM',
}

const social = SocialMedia.INSTAGRAM
// console.log(social) - 'INSTAGRAM'
