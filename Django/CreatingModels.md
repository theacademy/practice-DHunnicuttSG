in models.py we create the following code:
```py
class Contact(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    email = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.first_name}, {self.last_name}, {self.company}"
```

Need to run migrate to sync app with db

By running...
```
python manage.py sqlmigrate myapp 0001
```
This code will show the sql syntax used to create your tables

default table name is ```<appName>_<className>```

To make changes to the models you must do 3 things:
1. change code in models.py
2. make migrations
3. migrate

Can use python manage.py shell to get an interactive shell with django and the database

List of field types used in creating models
https://docs.djangoproject.com/en/5.1/ref/models/fields/#model-field-types

