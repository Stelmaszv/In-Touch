# Generated by Django 3.0.8 on 2020-08-10 13:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_remove_account_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='is_staff',
        ),
    ]