from django.urls import path

from .views import MovieListView, MenuListView, GenreListView, MovieDetailsView

urlpatterns = [
    path("movie-list/", MovieListView.as_view()),
    path("menu-list/", MenuListView.as_view()),
    path("genre-list/", GenreListView.as_view()),
    path("movie/<str:slug>/", MovieDetailsView.as_view()),
]