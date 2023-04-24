from django.db import models
from django.contrib.auth.models import User

class Rockets_bdf(models.Model):
    #help_text="текст подсказка около поля"
    #verbose_name='Напишите что нибудь'

    # 1_Общие данные
    #Название проекта
    text = models.CharField(max_length=200, null=True, help_text="Название проекта")
    
    start_rocket = models.CharField(max_length=200, null=True, help_text="Название проекта")
    
    
    
    #Определение старта ракеты
    #start_rocket = models.PositiveSmallIntegerField(help_text="Введите 0, если старт подводный,     1 - наземный", null=True)
    
    #Введите время выхода ракеты из контейнера в секундах
    #t = models.DecimalField(decimal_places=3, max_digits=6, help_text="с точностью до тысячных", verbose_name='Время выхода ракеты из контейнера в секундах')
    
    #Время создания
    #data_added = models.DateTimeField(auto_now_add=True, null=True)               


    def __str__(self):
        #Отображение названия модели
        return f"{self.text[:50]}"

