from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager, Server, Shell

from tqll import create_app
from tqll.models import db

app = create_app()
manager = Manager(app)


# 生成shell内容
def _make_context():
    return dict(**globals())


# 加载manager命令
# 加载启动命令
manager.add_command("runserver", Server("127.0.0.1", port=5050))
# 加载shell命令
manager.add_command("shell", Shell(make_context=_make_context))
# 加载数据迁移命令
migrate = Migrate(app, db)
manager.add_command("db", MigrateCommand)


# 生成数据库
@manager.command
def createdb():
    db.create_all()


if __name__ == '__main__':
    manager.run()
