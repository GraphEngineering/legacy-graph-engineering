interface Query {
	hero: Character
	hero2: Character
	reviews: Review[]
	search: SearchResult[]
	character: Character
	droid: Droid
	human: Human
	starship: Starship
}

interface Mutation {
	createReview: Review
}

type Dankness<T> = T;

enum Episode {
	NEWHOPE,
	EMPIRE,
	JEDI
}

interface Character {}

enum LengthUnit {
	METER,
	FOOT
}

interface Human {
	homePlanet: String
	height: number
	mass: number
	starships: Starship[]
}

interface Droid {
	primaryFunction: String
}

interface FriendsConnection {
	totalCount: number
	edges: FriendsEdge[]
	friends: Character[]
	pageInfo: PageInfo
}

interface FriendsEdge {
	cursor: string
	node: Character
}

interface PageInfo {
	startCursor: string
	endCursor: string
	hasNextPage: boolean
}

interface Review {
	stars: number
	commentary: String
}

interface Starship {
	id: string
	name: String
	length: number
	coordinates: number[][]
}

type SearchResult = Human | Droid | Starship;