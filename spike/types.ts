interface Query {
	hero: Character;
	hero2: Character;
	reviews: Review[];
	search: SearchResult[];
	character: Character;
	droid: Droid;
	human: Human;
	starship: Starship;
}

interface Mutation {
	createReview: Review;
}

interface Human {
	id: string;
	name: String;
	homePlanet: String;
	height: number;
	mass: number;
	friends: Character[];
	friendsConnection: FriendsConnection;
	appearsIn: Episode[];
	starships: Starship[];
}

interface Droid {
	id: string;
	name: String;
	friends: Character[];
	friendsConnection: FriendsConnection;
	appearsIn: Episode[];
	primaryFunction: String;
}

interface FriendsConnection {
	totalCount: number;
	edges: FriendsEdge[];
	friends: Character[];
	pageInfo: PageInfo;
}

interface FriendsEdge {
	cursor: string;
	node: Character;
}

interface PageInfo {
	startCursor: string;
	endCursor: string;
	hasNextPage: boolean;
}

interface Review {
	stars: number;
	commentary: String;
}

interface Starship {
	id: string;
	name: String;
	length: number;
	coordinates: number[][];
}