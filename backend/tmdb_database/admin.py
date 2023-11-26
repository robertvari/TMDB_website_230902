from django.contrib import admin

from .models import MenuItem, Movie, Genre, MovieDetails

class MovieAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "vote_average", "release_date", "poster_path"]
    search_fields = ["title", "release_date"]
    readonly_fields = ["slug"]

class MovieDetailsAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "vote_average", "release_date", "poster_path"]
    search_fields = ["title", "release_date"]
    readonly_fields = ["slug"]

admin.site.register(MenuItem)
admin.site.register(Genre)
admin.site.register(Movie, MovieAdmin)
admin.site.register(MovieDetails, MovieDetailsAdmin)