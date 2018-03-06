from sqlalchemy import text

from tqll.models import db


class Category(db.Model):
    __tablename__="categorys"
    categoryid=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(32),nullable=False)
    url=db.Column(db.String,nullable=False)
    created_at=db.Column(db.DATETIME,server_default=text("CURRENR_TIMESTAMP"))
    