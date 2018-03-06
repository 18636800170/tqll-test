from flask import request
from flask_classy import FlaskView


class DigestView(FlaskView):
    def index(self):
        categoryid=request.args.get("categoryid")
        return categoryid()

    def test(self):
        return 