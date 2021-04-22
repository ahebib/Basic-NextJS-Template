// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sampleData = [
	{
		'title': 'Black Widow',
		'releaseDate': 'July 9, 2021'
	},
	{
		'title': 'Shang-Chi and the Legend of the Ten Rings',
		'releaseDate': 'September 3, 2021'
	},
	{
		'title': 'The Eternals',
		'releaseDate': 'November 5, 2021'
	},
	{
		'title': 'Spider-Man: No Way Home',
		'releaseDate': 'December 17, 2021'
	}
]

export default (req, res) => {
	res.status(200).json({ results: sampleData });
}