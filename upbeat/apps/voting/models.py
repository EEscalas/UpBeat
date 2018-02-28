# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class PartyPasswords(models.Model):
    partyName=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)


class PartySongs(models.Model):
    partyName=models.CharField(max_length=255)
    songName=models.CharField(max_length=255)
    partyName=models.CharField(max_length=255)
        
    description=models.TextField()
    startDate=models.DateField()
    endDate=models.DateField()
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    planner=models.ForeignKey(User, related_name='trips')
    joiners=models.ManyToManyField(User, related_name='jtrips')