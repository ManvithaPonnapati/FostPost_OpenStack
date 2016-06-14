from celery.decorators import task
from celery.utils.log import get_task_logger

from feedback.emails import send_feedback_email

logger = get_task_logger(__name__)


@task(name="add")
def add(x,y):
   
    logger.info("Send added number back")
    return x+y