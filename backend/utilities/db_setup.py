import tmdbsimple as tmdb
import os, requests, json, random
# from tmdb_database.models import Movies, Genre, MenuItem
from django.core.files import File

tmdb.API_KEY = '83cbec0139273280b9a3f8ebc9e35ca9'
tmdb.REQUESTS_TIMEOUT = 5
POSTER_ROOT_PATH = "https://image.tmdb.org/t/p/w300"
BACKDROP_ROOT_PATH = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces"
CACHE_FOLDER = "D:/Work/_PythonSuli/halado-230902/web_development/fake_db/posters"
DATABASE_JSON = "D:/Work/_PythonSuli/halado-230902/web_development/fake_db/movie_db.json"

def download_movies():
    movies = tmdb.Movies()
    popular_movies = movies.popular(page=1)["results"]

    movie_list = []
    for movie_data in popular_movies:
        movie_data["poster_path"] = get_image_from_url(f"{POSTER_ROOT_PATH}/{movie_data.get('poster_path')}")
        movie_list.append(movie_data)

    with open(DATABASE_JSON, "w") as f:
        json.dump(movie_list, f)

def create_movie_list():
    with open(DATABASE_JSON) as f:
        movie_db = json.load(f)

    for movie_data in movie_db:
        title = movie_data.get("title")
        print(f"Add movie: {title}")
        vote_average = movie_data.get("vote_average")
        release_date = movie_data.get("release_date")
        poster_path = movie_data.get("poster_path")
        popularity = movie_data.get("popularity")

        movies = Movies()
        movies.title = title
        movies.vote_average = vote_average
        movies.release_date = release_date
        movies.poster_path.save(os.path.basename(poster_path), File(open(poster_path, "rb")))
        movies.popularity = popularity

        genre_list = [i for i in Genre.objects.all()]
        random.shuffle(genre_list)
        movie_genres = genre_list[:random.randint(1, 4)]
        for i in movie_genres:
            movies.genres.add(i)

        movies.save()

def create_genres():
    genre_list = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", 
                  "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery",
                  "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"
                  ]
    for name in genre_list:
        print(f"Add genre: {name}")
        genre = Genre()
        genre.name = name
        genre.save()

def create_menu_items():
    menu_items = ["Movies", "TV Shows", "People", "More"]
    for item in menu_items:
        menu = MenuItem()
        menu.name = item
        menu.save()

def get_image_from_url(url):
    # create cache folder
    if not os.path.exists(CACHE_FOLDER):
        os.makedirs(CACHE_FOLDER)
    
    image_file_name = url.split("/")[-1]
    image_path = os.path.join(CACHE_FOLDER, image_file_name)

    # if image exists return full path
    if os.path.exists(image_path):
        return image_path
    
    assert requests.get(url).status_code == 200, f"BAD REQUEST: {url}"

    img_data = requests.get(url).content
    with open(image_path, "wb") as f:
        f.write(img_data)

    print(f"Downloading: {url}")
    return image_path


if __name__ == "__main__":
    download_movies()