from django.db import models
from django.contrib.auth.models import  AbstractBaseUser,BaseUserManager
class AccountManager(BaseUserManager):

    def create_user(self,email,password,sex,birthday):
        if not email:
            raise ValueError('user has no email')
        user= self.model(
            email=self.normalize_email(email),
            password = password,
            sex = sex,
            birthday = birthday
        )
        user.is_staff = False
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,email,password,sex,birthday):
        user= self.create_user(
            email=self.normalize_email(email),
            password=password,
            sex=sex,
            birthday=birthday
        )
        user.is_admin= True
        user.is_staff=True
        user.is_superuser=True
        user.save(using=self._db)
        return user

class Account(AbstractBaseUser):

    # register Fields
    sexChoices = ['male', 'female']
    MONTH_CHOICES = [(str(i), i) for i in sexChoices]
    email = models.EmailField(verbose_name="email", max_length=50, unique=True)
    sex = models.CharField(max_length=9, choices=MONTH_CHOICES, default='1')
    birthday = models.DateTimeField(null=True)

    # admin fields
    date_joined         = models.DateTimeField(verbose_name="date joined", auto_now_add=True,null=True)
    last_login          = models.DateTimeField(verbose_name='last login', auto_now_add=True,null=True)
    is_admin            = models.BooleanField(default=False)
    is_active           = models.BooleanField(default=True)
    is_staff            = models.BooleanField(default=False)
    is_superuser        = models.BooleanField(default=False)

    # auth setings
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['sex','birthday']
    object=AccountManager()
    objects = models.Manager()

    def __str__(self):
        return str(self.email)+' '+str(self.ifSuperUser())
    def ifSuperUser(self):
        if self.is_superuser:
            return 'SUPERUSER'
        return ''

    def has_perm(self,perm,obj=None):
        return self.is_admin

    def has_module_perms(self,app_label):
        return True