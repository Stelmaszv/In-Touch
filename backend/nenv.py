class nenv_manage:
    #start herocu defult setings
    ALLOWED_HOSTS = ['intouchpl.herokuapp.com']
    SECRET_KEY = '^$pm=xwj1znq+vm3pfm$j7%3^+0m5l-msgg8r9gm7pe06ft3&k'
    DEBUG = True
    DEPLOY = 'deploy'
    #end herocu setings
    def __init__(self):
        self.set_DEBUG()
    def set_DEBUG(self):
        if self.DEBUG:
            self.ALLOWED_HOSTS=[]
            self.STATICFILES_DIRS='/deploy'
        return self.ALLOWED_HOSTS
