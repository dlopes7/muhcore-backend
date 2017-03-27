import * as express from 'express';
import { Views } from '../views'

export class Api {

    public router: express.Router
    public views: Views;

    constructor(app) {
        this.views = new Views(this);
        this.router = express.Router();

    }

    setRoutes() {
        this.router.get('/realms', (req, res, next) => {

            this.views.getRealms().then(viewResponse => {
                res.json(viewResponse);
            })

        });

        this.router.get('/realms/:realm_slug', (req, res, next) => {

            this.views.getRealmBySlug(req.params.realm_slug).then(viewResponse => {
                if (viewResponse == null) {
                    res.status(404).json({ 'error': true, 'error_message': `Realm ${req.params.realm_slug} does not exist` })
                }
                else {
                    res.json(viewResponse);
                }

            })

        });

    }
}
