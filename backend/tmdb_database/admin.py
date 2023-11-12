from django.contrib import admin

from .models import MenuItem, Movie, Genre

class MovieAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "vote_average", "release_date", "poster_path"]
    search_fields = ["title", "release_date"]

admin.site.register(MenuItem)
admin.site.register(Genre)
admin.site.register(Movie, MovieAdmin)