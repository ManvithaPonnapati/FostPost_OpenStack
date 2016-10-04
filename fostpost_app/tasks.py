from celery.decorators import task
from celery.utils.log import get_task_logger

from feedback.emails import send_feedback_email

logger = get_task_logger(__name__)


@task(name="get_asset_image")
def get_user_image(email,image_id):
    return 'i am returning  images etc'

@task(name="get_asset_logos")
def get_user_logo(email,logo_id):
    return 'i am returning user Logo etc'

@task(name="save_asset_image")
def get_user_image(email):
    return 'i am saving  images etc'

@task(name="save_asset_logo")
def save_user_logo(email):
    return 'i am saving user logo'

@task(name="get_session_variables")
def get_user_session(email):
    return 'i am returning users session variables'

@task(name="save_session_variables")
def save_user_session(email):
    return 'i saved session variables'
