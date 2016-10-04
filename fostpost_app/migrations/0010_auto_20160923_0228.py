# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-09-23 02:28
from __future__ import unicode_literals

from django.db import migrations, models
import fostpost_app.models


class Migration(migrations.Migration):

    dependencies = [
        ('fostpost_app', '0009_auto_20160907_1348'),
    ]

    operations = [
        migrations.AlterField(
            model_name='craftcloud_user',
            name='email',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='photo',
            name='file',
            field=models.ImageField(storage=fostpost_app.models.OverwriteStorage(), upload_to=b'/CraftCloud/FostPost/fostpost_app/media/', verbose_name=b'Label'),
        ),
    ]
