'use strinct';


class MainController {

	all(req, res, next) {
		// console.log(req.route.path)
		res.json({ message: 'Eduardo 1' });
	}

	create(req, res, next) {
		res.json({ message: 'Eduardo 2' });
	}

	info(req, res, next) {
		res.json({ message: 'Eduardo 3' });
	}

	update(req, res, next) {
		res.json({ message: 'Eduardo 4' });
	}

	delete(req, res, next) {
		res.json({ message: 'Eduardo 5' });
	}
}

module.exports = new MainController();
