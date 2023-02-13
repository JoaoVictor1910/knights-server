import { AppService } from './app.service';
import { GetKnights } from './knights-services/get-knights.service';
import { PostKnights } from './knights-services/post-knights.service';
import { DeleteKnights } from './knights-services/delete-knights.service';

export const services = [
    AppService,
    GetKnights,
    PostKnights,
    DeleteKnights
]