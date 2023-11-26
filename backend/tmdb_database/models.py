from django.db import models
from django.utils.text import slugify
from django.dispatch import receiver
from django.db.models.signals import pre_save, post_save

class MenuItem(models.Model):
    name = models.CharField(max_length=200, default="")
    slug = models.CharField(max_length=200, default="")

    def __str__(self) -> str:
        return self.name
    
class Genre(models.Model):
    name = models.CharField(max_length=200)
    
    def __str__(self) -> str:
        return self.name

class Movie(models.Model):
    title = models.CharField(max_length=200, help_text="The movie title")
    slug = models.SlugField(max_length=200, blank=True)
    vote_average = models.FloatField(default=0.0, help_text="Movie rating")
    popularity = models.FloatField(default=0.0)
    release_date = models.DateField()
    poster_path = models.ImageField(upload_to="posters")
    genres = models.ManyToManyField(Genre)
    
    class Meta:
        ordering=["-vote_average"]

    def __str__(self) -> str:
        return self.title

class MovieDetails(models.Model):
    title = models.CharField(max_length=200, help_text="The movie title")
    overview = models.CharField(max_length=200, blank=True, help_text="Overview")
    slug = models.SlugField(max_length=200, blank=True)
    vote_average = models.FloatField(default=0.0, help_text="Movie rating")
    popularity = models.FloatField(default=0.0, blank=True)
    release_date = models.DateField()
    poster_path = models.ImageField(upload_to="posters", blank=True)
    backdrop_path = models.ImageField(upload_to="backdrops", blank=True)
    genres = models.ManyToManyField(Genre)

@receiver(pre_save, sender=MovieDetails)
def slug_generator(sender, instance, **kwargs):
    if not instance.slug:
        instance.slug = slugify(f"{instance.title}-{instance.release_date}")

@receiver(post_save, sender=MovieDetails)
def create_movie(sender, instance, **kwargs):
    if kwargs["created"]:
        movie = Movie.objects.create(
            title = instance.title,
            slug = instance.slug,
            vote_average=instance.vote_average,
            popularity = instance.popularity,
            release_date=instance.release_date,
            poster_path = instance.poster_path
        )
        # genre_list = [i for i in instance.genres.all()]
        # print("Movie genres:", instance.genres)
        # movie.genres.set(genre_list)
        # movie.save()
    else:
        pass