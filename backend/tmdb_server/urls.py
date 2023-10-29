from django.contrib import admin
from django.urls import path

from api.views import MovieListView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/movie-list/", MovieListView.as_view()),
]