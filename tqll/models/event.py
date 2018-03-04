from tqll.models import db


class Post(db.Model):
    postid=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String,nullable=False)
    categoryid=db.Column(db.Integer,index=True)
    