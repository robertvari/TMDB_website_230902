from typing import Any
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import MenuItem, Movie, Genre

class MovieListView(APIView):
    def __init__(self, **kwargs: Any):
        super().__init__(**kwargs)
        self.data = []
        self.sorting = "-vote_average"

    def get(self, request):
        self.data.clear()
        self._get_movies()
        return Response(self.data)
    
    def post(self, request):
        self.data.clear()
        self.sorting = request.data.get("sorting") if request.data.get("sorting") else "-vote_average"
        self._get_movies()

        return Response(self.data)

    def _get_movies(self):
        for movie in Movie.objects.order_by(self.sorting):

            self.data.append({
                "title": movie.title,
                "vote_average": movie.vote_average,
                "release_date": movie.release_date,
                "poster_path": movie.poster_path.url,
                "genres": [i.id for i in movie.genres.all()],
                "slug": movie.slug
            })


class MenuListView(APIView):
    def get(self, request):
        result = []

        for menu_item in MenuItem.objects.all():
            result.append({
                "name": menu_item.name, 
                "slug": menu_item.slug
                })

        return Response(result)
    
class GenreListView(APIView):
    def get(self, request):
        result = []
        for genre in Genre.objects.all():
            result.append({"id":genre.id, "name": genre.name})
        return Response(result)