# Generated by Django 3.0.8 on 2020-08-10 13:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0012_auto_20200810_1554'),
    ]

    operations = [
        migrations.RenameField(
            model_name='account',
            old_name='month',
            new_name='sex',
        ),
    ]
