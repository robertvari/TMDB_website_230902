from django.urls import path

from .views import MovieListView, MenuListView, GenreListView

urlpatterns = [
    path("movie-list/", MovieListView.as_view()),
    path("menu-list/", MenuListView.as_view()),
    path("genre-list/", GenreListView.as_view()),
]