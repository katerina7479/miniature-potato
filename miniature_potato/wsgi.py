"""
WSGI config for miniature_potato project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/howto/deployment/wsgi/
"""

import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "miniature_potato.settings")

from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()
