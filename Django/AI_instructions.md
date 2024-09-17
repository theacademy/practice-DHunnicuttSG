I was curious so I typed the following prompt into the AI:
```
I need all the django code for creating an API server app that will let me create, read, update, and delete contacts from a contact list, serialize them and return json data.
```
...and I got back this:

## Step 1: Set Up Django Project

- 1: create virtual environment
```
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
pip install django djangorestframework
```
- 2: create project and app
```
django-admin startproject contact_project
cd contact_project
django-admin startapp contacts
```
- 3: Add rest_framework and contacts to INSTALLED_APPS in project settings.py
```py
INSTALLED_APPS = [
    ...
    'rest_framework',
    'contacts',
]
```
## Step 2: Define Model

- 1: define contact model
```py
from django.db import models

class Contact(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

```
- 2: Run migrations to create database tables
```
python manage.py makemigrations
python manage.py migrate

```

## Step 3: Create Serializers
- 1: create serializers.py file for your serializers
```py
from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

```

## Step 4: Create Views
- 1: Create views for CRUD operations

```py
from rest_framework import viewsets
from .models import Contact
from .serializers import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
```

## Step 5: Set Up Urls
- 1: create application urls.py file 

```py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactViewSet

router = DefaultRouter()
router.register(r'contacts', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
```

- 2: include the application URLs in the main project urls.py file

```py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('contacts.urls')),
]
```
## Step 6: Run the Server
```
python manage.py runserver
```

## API Endpoints:
- Create a contact: POST /api/contacts/
- Read contacts: GET /api/contacts/
- Update a contact: PUT /api/contacts/{id}/
- Delete a contact: DELETE /api/contacts/{id}/