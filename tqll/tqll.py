import logging
import os

from flask import Flask
from flask_classy import FlaskView

from tqll.models import db


def create_app(config=None):
    # 生成ａｐｐ
    app = Flask(__name__)
    # 导入配置
    app.config.from_object("tqll.configs.default.DefaultConfig")
    app.config.from_object(config)
    # 注册数据库
    db.init_app(app)
    # 注册视图函数
    configure_views(app)

    # 设置日志生成格式
    if not app.debug:
        app.logger.setLevel(logging.INFO)
        file_handle= logging.FileHandler(os.path.join(app.config["LOG_DIR"],"app.log"))
        file_handle.setLevel(logging.INFO)
        file_handle.setFormatter(logging.Formatter(
            "%(asctime)s %(levelname)s : %(message)s"
        ))

    # 日志
    app.logger.addHandler("create app succeful")


    return app

def configure_views(app):
    from tqll.api.index import IndexView
    for view in locals().values():
        if type(view)==type and issubclass(view,FlaskView):
            view.register(app)
