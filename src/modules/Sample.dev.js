import { run } from '../selenium';
import log from '@logger';
import config from '@config';
import Cron from '@cron';

const job = new Cron('* * * * * *', () => {

});
job.start();