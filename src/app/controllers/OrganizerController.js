import Meetup from '../models/Meetup';
import File from '../models/File';

class OrganizerController {
    async index(req, res) {
        const meetups = await Meetup.findAll({
            where: { user_id: req.userId },
            include: [
                {
                    model: File,
                    attributes: ['id', 'path', 'url'],
                },
            ],
        });

        return res.json(meetups);
    }
}

export default new OrganizerController();
