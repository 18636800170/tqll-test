from tqll.models import db


class Company(db.Model):
    __tablename__="companys"
    companyid=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(32),nullable=False)
    isvip=db.Columno(db.Integer,default=0)
