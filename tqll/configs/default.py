import os


class DefaultConfig(object):
    BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../"))

    DEBUG = True

    TYPE = "mysql+pymysql"
    USERNAME = "root"
    PASSWORD = "root"
    HOST = "127.0.0.1"
    PORT = 3306
    DATABASENAME = "tqll"
    SQLALCHEMY_DATABASE_URI = "{}://{}:{}@{}:{}/{}".format(TYPE, USERNAME, PASSWORD, HOST, PORT, DATABASENAME)

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    SQLALCHEMY_ECHO = True

    LOG_DIR = os.path.join(BASE_DIR, "logs")
