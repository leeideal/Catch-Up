# Generated by Django 4.1 on 2022-08-18 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("post", "0003_alter_post_created_at_alter_post_like_users_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="post", name="coin", field=models.IntegerField(default=0),
        ),
    ]
