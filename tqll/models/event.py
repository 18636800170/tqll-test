from sqlalchemy import text, func

from tqll.models import db


class Event(db.Model):
    __tablename__="events"
    eventid=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(32),nullable=False)
    categoryid=db.Column(db.Integer,index=True)
    created_at=db.Column(db.DATETIME,server_default=text("CURRENT_TIMESTAMP"))
    updated_at=db.Column(db.DATETIME,onupdate=func.now())
    