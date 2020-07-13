class nenv_manage:
    ALLOWED_HOSTS = ['intouchpl.herokuapp.com']
    SECRET_KEY = '^$pm=xwj1znq+vm3pfm$j7%3^+0m5l-msgg8r9gm7pe06ft3&k'
    DEBUG = True
    def set_ALLOWED_HOST(self):
        if self.DEBUG:
            self.ALLOWED_HOSTS=[]
        return self.ALLOWED_HOSTS
