# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse
from django.shortcuts import render


def my_page(request):
    return render(request, 'index.html')

# Create your views here.
