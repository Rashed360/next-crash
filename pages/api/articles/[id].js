import { UserList } from '../../../data'

export default function handler({ query: { id } }, res) {
	const filtered = UserList.filter(user => user.id === id)

	if (filtered.length > 0) {
		res.status(200).json(filtered[0])
	} else {
		res.status(404).json({ message: `User ${id} don't exist.` })
	}
}
