import * as express from 'express';
import { Views } from '../views'

export class Api {

    public router: express.Router
    public logger: any;
    public views: Views;

    constructor(app) {
        this.logger = app.logger;
        this.views = new Views(this);
        this.router = express.Router();

        this.setRoutes();

    }

    setRoutes() {
        this.logger.debug('Setting API routes');
        this.setRealmRoutes();
        this.setGuildRoutes();
        
    }

    setRealmRoutes(){
        this.logger.debug('Setting Realm API routes');
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
    setGuildRoutes(){
        this.logger.debug('Setting Guild API routes');
        this.router.post('/guilds', (req, res, next) => {
            res.json({'vai se foder': 'sim'})
        
        });
    }

}
