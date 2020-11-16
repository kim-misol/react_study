from flask_wtf import FlaskForm
from wtforms import (
    StringField,
    PasswordField,
    SubmitField,
    BooleanField,
    widgets,
    fields,
    FormField,
    FileField,
    SelectField
)
from wtforms.fields.html5 import EmailField
from wtforms.validators import DataRequired, Email, Length


class LoginForm(FlaskForm):
    username = StringField('Email address', validators=[DataRequired()], render_kw={'autofocus': True})
    password = PasswordField('Password', validators=[DataRequired()])
    remember_me = BooleanField('Remember Me')
    submit = SubmitField('Submit')


class SignUpForm(FlaskForm):
    email = EmailField('Email', validators=[DataRequired(), Email()])
    username = StringField('Email address', validators=[DataRequired()], render_kw={'autofocus': True})
    password = PasswordField('Password', validators=[DataRequired(), Length(min=8)])
    submit = SubmitField('Submit')


class PostEditForm(FlaskForm):
    title = StringField(u"Title")
    content = StringField(u"Content")
    content_preview = StringField(u"Content preview")
    save = SubmitField('Save')
    save_draft = SubmitField('Save Draft')


class PostCreateForm(FlaskForm):
    submit = SubmitField('Create New Post')
