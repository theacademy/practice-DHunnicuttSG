## Installing Django in python vs code
- Create a folder you want to use for your project
- create a virtual environment
- Type the following at a terminal prompt within the folder you want to use
```
python -m venv <name it>
```

Then you will need to activate it:
- Windows
```
<name>\Scripts\activate.bat
```
- Mac
```
source <name>/bin/activate
```
You can deactivate by typing the command:
```
deactivate.bat
```
To install Django
```
python -m pip install Django
```

## Create a Django Project
- in your terminal window
```
django-admin startproject myproject
```
## Create a Django Application (App)
- cd into project folder and type following command
```
django-admin startapp myapp
```
- add your app to the site settings under installed apps

## How to migrate changes into the app
```
# prepare any model changes
python manage.py makemigrations

# actually apply those changes  
python manage.py migrate
```

To run the server:
- be sure you are in correct directory
```
python manage.py runserver
```

To stop server: use ctrl-c

## Create a superuser
- python manage.py createsuperuser
  - Enter username
  - Enter email
  - Enter password twice

- run server and add /admin to url
- log in with new credentials

## Create a basic view
```py
from django.http import HttpResponse

def index(request):
  return HttpResponse("<h2>This is the Index page</h2>")
```

## Add a templates folder to App
- new folder titled: templates
- create another folder within templates with the same name as app
- create an index.html file inside this folder

## define a view for your index.html file
in the app/views.py file:
```py
def index(request):
  return render(request, "myapp/index.html", {})
```
- return and render the page
- request is first argument in HttpRequest object
- path to the template
- context dictionary to pass data to the template

## Create a urls.py for your app
- you can copy the urls.py file from your project if you want
- Doc strings at the top will help explain
- create a url pattern in your app
```py
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index')
]
```

## update your urls.py file for your project to include your app/urls.py
```py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include("myapp.urls")),
    path('admin/', admin.site.urls),
]
```
