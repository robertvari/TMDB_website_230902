from django.db import models


class MenuItem(models.Model):
    name = models.CharField(max_length=200, default="")
    slug = models.CharField(max_length=200, default="")

    def __str__(self) -> str:
        return self.name
    

class Movie(models.Model):
    original_title = models.CharField(max_length=200, help_text="The movie title")
    vote_average = models.FloatField(default=0.0, help_text="Movie rating")
    release_date = models.DateField()
    poster_path = models.ImageField(upload_to="posters")

    def __str__(self) -> str:
        return self.original_title