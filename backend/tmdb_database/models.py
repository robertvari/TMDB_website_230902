from django.db import models


class MenuItem(models.Model):
    name = models.CharField(max_length=200, default="")

    def __str__(self) -> str:
        return self.name