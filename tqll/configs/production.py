from tqll.configs.default import DefaultConfig


class ProductionConfig(DefaultConfig):
    DEBUG = False
    SQLALCHEMY_ECHO = False
   