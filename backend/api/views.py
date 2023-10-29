from rest_framework.views import APIView
from rest_framework.response import Response
import tmdbsimple as tmdb
tmdb.API_KEY = '83cbec0139273280b9a3f8ebc9e35ca9'
tmdb.REQUESTS_TIMEOUT = 5
POSTER_ROOT_PATH = "https://image.tmdb.org/t/p/w300"


class MovieListView(APIView):
    def get(self, request):
        self.data = []
        self._get_movies()

        return Response(self.data)
    
    def _get_movies(self):
        movies = tmdb.Movies()
        movie_list = movies.popular(page=1)["results"]

        for movie_data in movie_list:
            movie_data["poster_path"] = f"{POSTER_ROOT_PATH}{movie_data['poster_path']}"
            self.data.append(movie_data)