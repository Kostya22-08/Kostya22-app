const article = {
	id: 1,
    title: 'Hello world',
    date: '1568620630', // UNIX timestamp
    text: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
    `,
    img:'<img src="https://via.placeholder.com/150" alt="Image"/>',
}

export default function Article (state = article) {
	return state
}