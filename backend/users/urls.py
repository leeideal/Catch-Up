from django.urls import path
from .views import *

app_name = 'users'
urlpatterns = [
    path('user_list/', user_list_create, name="user_list_create"),
    path('<int:user_pk>/', user_rud, name="user_rud"),
    path('profile/<int:user_id>', user_profile, name="user_profile"),
    path('profile_update/<int:user_id>', profile_update, name="profile_update"),
]
