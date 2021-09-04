from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    userName = models.CharField(max_length=20)
    password = models.CharField(max_length=20)

    def __str__(self):
        return str(self.id)


class Content(models.Model):
    id = models.AutoField(primary_key = True)
    img = models.ImageField(upload_to = 'media/')
    caption = models.TextField()
    user_id = models.ForeignKey(User, on_delete = models.CASCADE)


  
