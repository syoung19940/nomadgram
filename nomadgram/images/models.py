from django.db import models
from nomadgram.users import models as user_models
from django.utils.encoding import python_2_unicode_compatible
from taggit.managers import TaggableManager
# Create your models here.

@python_2_unicode_compatible
class TimeStampedModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:#anything that is not field
        abstract = True #abstract, then it will not connect to database

@python_2_unicode_compatible
class Image(TimeStampedModel):

    file = models.ImageField()
    location = models.CharField(max_length = 140)
    caption = models.TextField()
    creator = models.ForeignKey(user_models.User,related_name='images',on_delete = models.CASCADE, null = True)
    tags = TaggableManager()

    @property
    def like_count(self):
        return self.like.all().count()

    @property
    def comment_count(self):
        return self.comments.all().count()

    def __str__(self):
        return ' {} - {} '.format(self.location, self.caption)
    
    class Meta:
        ordering = ['-created_at']
    
@python_2_unicode_compatible
class Comment(TimeStampedModel):
    
    message = models.TextField(max_length = 140)
    creator = models.ForeignKey(user_models.User,on_delete = models.CASCADE, null = True)
    image = models.ForeignKey(Image,on_delete = models.CASCADE, null = True, related_name= 'comments')  

    def __str__(self):
        return self.message

@python_2_unicode_compatible
class Like(TimeStampedModel):
    
    creator = models.ForeignKey(user_models.User,on_delete = models.CASCADE)
    image = models.ForeignKey(Image,on_delete = models.CASCADE)  

    def __str__(self):
        return 'User:{} - Image Caption:{}'.format(self.creator.username, self.image.caption)