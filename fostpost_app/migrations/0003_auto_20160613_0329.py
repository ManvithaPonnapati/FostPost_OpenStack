# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-06-13 03:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fostpost_app', '0002_craftcloud_account_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='craftcloud_account',
            name='username',
            field=models.CharField(max_length=40),
        ),
    ]
