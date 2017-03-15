import * as express from 'express';
import Logger from '../../utils/logger';
import Views from '../../views'

let router = express.Router();

Logger.debug('Setting up routes');

router.get('/realms', (req, res, next) => {

    Views.getRealms().then( viewResponse => {
        res.json(viewResponse);
    })

});

router.get('/realms/:realm_slug', (req, res, next) => {

    Views.getRealmBySlug(req.params.realm_slug).then( viewResponse => {
        if (viewResponse == null){
            res.status(404).json({'error': true, 'error_message': `Realm ${req.params.realm_slug} does not exist`})
        }
        else{
            res.json(viewResponse);
        }
        
    })

});

export default router;