#! /bin/bash
NAME="FostPost"                              #Name of the application (*)
DJANGODIR=/home/ec2-user/FostPost_OpenStack             # Django project directory (*)
SOCKFILE=FostPost/run/gunicorn.sock        # we will communicate using this unix socket (*)

USER=ec2-user                                        # the user to run as (*)
GROUP=nginx                                     # the group to run as (*)
NUM_WORKERS=1                                     # how many worker processes should Gunicorn spawn (*)
DJANGO_SETTINGS_MODULE=FostPost.settings             # which settings file should Django use (*)
DJANGO_WSGI_MODULE=FostPost.wsgi                     # WSGI module name (*)

echo "Starting $NAME as `whoami`"

# Activate the virtual environment
cd $DJANGODIR 
source /home/ec2-user/.virtualenvs/craftclouddev/bin/activate
#cd $DJANGODIR
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH

# Create the run directory if it doesn't exist
RUNDIR=$(dirname $SOCKFILE)
test -d $RUNDIR || mkdir -p $RUNDIR

# Start your Django Unicorn
# Programs meant to be run under supervisor should not daemonize themselves (do not use --daemon)
exec /home/ec2-user/.virtualenvs/craftclouddev/bin/gunicorn ${DJANGO_WSGI_MODULE}:application \
  --name $NAME \
  --workers $NUM_WORKERS \
  --user $USER \
  --bind=unix:$SOCKFILE
