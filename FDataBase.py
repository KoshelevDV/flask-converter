import math
import re
import sqlite3
import time

from flask import url_for


class FDataBase:
    def __init__(self, db):
        self.__db = db
        self.__cur = db.cursor()

    def getMetrics(self):
        try:
            self.__cur.execute(f"SELECT id, name, url FROM metrics ORDER BY id DESC")
            res = self.__cur.fetchall()
            if res: return res
        except sqlite3.Error as e:
            print("Ошибка получения метрик из БД " + str(e))

    def getMetric(self, alias):
        try:
            self.__cur.execute(f"SELECT name FROM metrics WHERE url LIKE '{alias}' LIMIT 1")
            res = self.__cur.fetchone()
            if res:
                return res[0]
        except sqlite3.Error as e:
            print("Ошибка получения метрики из БД " + str(e))
        return False

    def getMass(self):
        try:
            self.__cur.execute(f"SELECT * FROM mass ORDER BY id DESC")
            res = self.__cur.fetchall()
            if res: return res
        except sqlite3.Error as e:
            print("Ошибка получения метрик из БД " + str(e))

    def getTime(self):
        try:
            self.__cur.execute(f"SELECT * FROM time ORDER BY id DESC")
            res = self.__cur.fetchall()
            if res: return res
        except sqlite3.Error as e:
            print("Ошибка получения метрик из БД " + str(e))

    def getTemperature(self):
        try:
            self.__cur.execute(f"SELECT * FROM temperature ORDER BY id DESC")
            res = self.__cur.fetchall()
            if res: return res
        except sqlite3.Error as e:
            print("Ошибка получения метрик из БД " + str(e))


